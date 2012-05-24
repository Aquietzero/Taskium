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
    @student_id = params[:student_id]
    @file_tree = []

    dir = Dir.open(path)
    if dir
      while name = dir.read

        # Current directory
        next if name == '.' 

        # Previous directory
        if name == '..'
          # If the path is already /public/task_id/student_id, then no further backtrace
          # is allowed.
          unless path.split('/')[-1] == @student_id
            prev_path = path.split('/')
            if prev_path.length > 1
              prev_path = prev_path[0, prev_path.length - 1].join('/')
            else
              prev_path = prev_path.join('/')
            end
            @file_tree.push({ :name => name, :type => 'dir', :path => prev_path })
          end

        # Directory in the current directory
        elsif File.directory?(path + "/#{name}")
          @file_tree.push({ :name => name, :type => 'dir', :path => path + "/#{name}" })

        # File in the current directory
        else
          @file_tree.push({ :name => name, :type => 'file', :path => path + "/#{name}" })
        end

      end
    end

    @file_tree.sort_by! {|f| f[:name]}

    respond_to do |format|
      format.html # index.html.haml
      format.js   
    end
  end

end
