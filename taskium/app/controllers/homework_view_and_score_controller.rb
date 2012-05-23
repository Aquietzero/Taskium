class HomeworkViewAndScoreController < ApplicationController

  def index
    @user = User.find(params[:user])
    @task = Task.find(params[:task])

    # If the user doesn't belongs to any group, then @group will be undefined.
    if @user.group
      @groupers = @user.group.users.select {|grouper| grouper.id != @user.id}
    end
  end

  def show_source
    path = params[:path]
    @source = ''
    file = open(path)
    if file
      @source = file.read 
      file.close
    else
      @source = "He/Her hasn't hand in the homework!"
    end 

    respond_to do |format|
      format.html # index.html.haml
      format.js   # show_source.js.erb
    end
  end

  def file_tree
    path = params[:path]
    student_id = params[:student_id]

    @file_tree = []
    dir = Dir.open(path)
    if dir
      while name = dir.read
        if name == '.'
          @file_tree.push({ :name => name, :type => 'dir', :path => path })
        elsif name == '..'
          @file_tree.push({ :name => name, :type => 'dir', :path => path })
        elsif FileTest.directory?(path + '/name')
          @file_tree.push({ :name => name, :type => 'dir', :path => path + "/#{name}" })
        else
          @file_tree.push({ :name => name, :type => 'file', :path => path + "/#{name}" })
        end
      end
    end

    puts '==================================================================='
    puts @file_tree
    puts '==================================================================='

    respond_to do |format|
      format.html # index.html.haml
      format.js   
    end
  end

end
