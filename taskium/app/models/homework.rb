class Homework < ActiveRecord::Base

  belongs_to :user
  belongs_to :task
  has_many :groupscores
  has_one :finalscore

  before_save :get_file_data
  after_save :write_file
  after_destroy :delete_homework_file

  # Before save the file data into the database, set the path and keep
  # the file data to the instance variable.
  def get_file_data
    @path = "#{::Rails.root}/public/#{self.task.id}/#{self.user.student_id}"
    @file = self.file
    self.file = self.file.original_filename
  end

  # After saving the file into the database, deploy the file to the set
  # path and unzip it.
  def write_file
    Dir.mkdir(@path) unless File.directory? @path
    File.open("#{@path}/#{self.file}", "wb") { |f| f.write(@file.read) }
  end

  def delete_homework_file
    FileUtils.rm_rf("#{::Rails.root}/public/#{self.task.id}/#{self.user.student_id}")
  end

end
