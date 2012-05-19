class GroupsController < ApplicationController
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
    user = User.find(session[:user_id])

    unless user.group
      @group.users << user
      redirect_to admin_url, :notice => "You successfully joined group #{@group.name}"
    else
      redirect_to groups_url, :notice => "You are already in group #{user.group.name}"
    end
    # respond_to do |format|
    # format.html # show.html.erb
    # format.json { render json: @group }
    # end
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

end
