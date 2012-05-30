class HomeworksController < ApplicationController

  layout :set_layout
  before_filter :get_tasks, :only => [:new]

  # GET /homeworks
  # GET /homeworks.json
  def index
    @homeworks = Homework.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @homeworks }
    end
  end

  # GET /homeworks/1
  # GET /homeworks/1.json
  def show
    @homework = Homework.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @homework }
    end
  end

  # GET /homeworks/new
  # GET /homeworks/new.json
  def new
    # Only shows the homeworks which are still within the due.
    @homework = Homework.new
    @task = Task.find(params[:task_id])

    respond_to do |format|
      format.html # new.html.erb
      format.js   # new.js.erb
      # format.json { render json: @homework }
    end
  end

  # GET /homeworks/1/edit
  def edit
    @homework = Homework.find(params[:id])
  end

  # POST /homeworks
  # POST /homeworks.json
  def create
    @homework = Homework.new(params[:homework])
    user = User.find(session[:user_id])
    @homework.user = user

    homework = user.homeworks.find_by_task_id(@homework[:task_id])
    homework.destroy if homework

    respond_to do |format|
      if @homework.save
        format.html { redirect_to student_admin_url, notice: 'Homework was successfully handed in.' }
        format.json { render json: student_admin_url, status: :created, location: @homework }
      else
        format.html { render action: "new" }
        format.json { render json: @homework.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /homeworks/1
  # PUT /homeworks/1.json
  def update
    @homework = Homework.find(params[:id])

    respond_to do |format|
      if @homework.update_attributes(params[:homework])
        format.html { redirect_to @homework, notice: 'Homework was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @homework.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /homeworks/1
  # DELETE /homeworks/1.json
  def destroy
    @homework = Homework.find(params[:id])
    @homework.destroy

    respond_to do |format|
      format.html { redirect_to homeworks_url }
      format.json { head :no_content }
    end
  end

  protected
  def get_tasks
    @tasks = Task.all.select {|task| task.due > Time.now}
  end
end
