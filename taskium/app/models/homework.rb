require 'zip/zipfilesystem'

class Homework < ActiveRecord::Base

  belongs_to :user
  belongs_to :task
  has_many   :groupscores
  has_one    :finalscore
 
  before_create   :get_file_data
  after_create    :write_file
  after_destroy :delete_homework_file

  # Before save the file data into the database, set the path and keep
  # the file data to the instance variable.
  def get_file_data
    @path = "#{::Rails.root}/public/#{self.task.id}/#{self.user.student_id}"
    @file = self.file_pack
    @filename = self.file_pack.original_filename
    self.file_pack = @filename.split('.').first
    self.url = "#{self.file_pack}/index.html"
  end

  def write_file
    # Delete the directory first
    if File.directory? @path
      delete_homework_file
    end 

    # Create a directory and copy .zip file in it.
    Dir.mkdir(@path) unless File.directory? @path
    File.open("#{@path}/#{@filename}", "wb") { |f| f.write(@file.read) }

    # Unzip the file
    unzip_file(File.join(@path, @filename), File.join(@path))
  end

  def delete_homework_file
    FileUtils.rm_rf("#{::Rails.root}/public/#{self.task.id}/#{self.user.student_id}")
  end

  def unzip_file(file, destination)
    Zip::ZipFile.open(file) { |zip_file|
      zip_file.each { |f|
        f_path=File.join(destination, f.name)
        FileUtils.mkdir_p(File.dirname(f_path))
        zip_file.extract(f, f_path) unless File.exist?(f_path)
      }
    }
  end

end
