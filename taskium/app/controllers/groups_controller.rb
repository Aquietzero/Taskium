class GroupsController < ApplicationController

  layout :set_layout

  # GET /groups
  # GET /groups.json
  def index
    @groups = Group.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @groups }
    end
  end

  # GET /groups/1
  # GET /groups/1.json
  def show
    @group = Group.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @group }
    end
  end

  # GET /groups/new
  # GET /groups/new.json
  def new
    @group = Group.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @group }
    end
  end

  # GET /groups/1/edit
  def edit
    @group = Group.find(params[:id])
  end

  # POST /groups
  # POST /groups.json
  def create
    user = User.find(session[:user_id])

    # If the user has already in some group, then redirects to his admin page with warning.
    # Otherwise, the group is created and the user is set to be the manager of the group.
    if user.group
      redirect_to admin_url, :notice => "You are already in group #{user.group.name}"
      return
    end

    # Makes the group creator the default manager of the group.
    @group = Group.new(params[:group])
    user.group = @group
    user.role = 'MANAGER'
    user.save

    respond_to do |format|
      if @group.save
        format.html { redirect_to @group, notice: 'Group was successfully created.' }
        format.json { render json: @group, status: :created, location: @group }
      else
        format.html { render action: "new" }
        format.json { render json: @group.errors, status: :unprocessable_entity }
      end
    end
  end

  # PUT /groups/1
  # PUT /groups/1.json
  def update
    @group = Group.find(params[:id])

    respond_to do |format|
      if @group.update_attributes(params[:group])
        format.html { redirect_to @group, notice: 'Group was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @group.errors, status: :unprocessable_entity }
      end
    end
  end

  # DELETE /groups/1
  # DELETE /groups/1.json
  def destroy
    @group = Group.find(params[:id])
    @group.users.each do |user|
      user.update_attributes(:group_id => nil, :role => 'STUDENT')
    end
    @group.destroy

    respond_to do |format|
      format.html { redirect_to groups_url }
      format.json { head :no_content }
    end
  end

  # GET /groups/join/1
  # GET /groups/join/1.json
  def join
    @group = Group.find(params[:id])
    user = User.find(session[:user_id])

    unless user.group
      @group.users << user
      redirect_to admin_url, :notice => "You successfully joined group #{@group.name}"
    else
      redirect_to groups_url, :notice => "You are already in group #{user.group.name}"
    end
  end

  # GET /groups/quit/1
  # GET /groups/quit/1.json
  def quit
    @group = Group.find(params[:id])
    user = User.find(session[:user_id])

    # Make sure the user is in the group.
    unless user.group_id == @group.id
      redirect_to admin_url, :notice => "You are not in group #{@group.name}."
    else
      # If the manager of a group dismisses the group, then the group is deleted.
      if user.role == 'MANAGER'
        @group.users.each do |user|
          user.update_attributes(:group_id => nil, :role => 'STUDENT')
        end
        @group.destroy
        redirect_to admin_url, :notice => "Group #{@group.name} has been successfully dismissed."
      else
        user.update_attributes(:group_id => nil, :role => 'STUDENT')
        redirect_to admin_url, :notice => "You have successfully quited #{@group.name}."
      end 
    end
  end 

end
