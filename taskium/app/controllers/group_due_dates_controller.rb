class GroupDueDatesController < ApplicationController

  layout :set_layout
  # GET /group_due_dates
  # GET /group_due_dates.json

=begin
  def index
    @group_due_dates = GroupDueDate.all

    respond_to do |format|
      format.html # index.html.erb
      format.json { render json: @group_due_dates }
    end
  end
=end

  # GET /group_due_dates/1
  # GET /group_due_dates/1.json
  def show
    @group_due_date = GroupDueDate.find(params[:id])

    respond_to do |format|
      format.html # show.html.erb
      format.json { render json: @group_due_date }
    end
  end

=begin
  # GET /group_due_dates/new
  # GET /group_due_dates/new.json
  def new
    @group_due_date = GroupDueDate.new

    respond_to do |format|
      format.html # new.html.erb
      format.json { render json: @group_due_date }
    end
  end
=end 

  # GET /group_due_dates/1/edit
  def edit
    @group_due_date = GroupDueDate.find(params[:id])
  end

=begin
  # POST /group_due_dates
  # POST /group_due_dates.json
  def create
    @group_due_date = GroupDueDate.new(params[:group_due_date])

    respond_to do |format|
      if @group_due_date.save
        format.html { redirect_to @group_due_date, notice: 'Group due date was successfully created.' }
        format.json { render json: @group_due_date, status: :created, location: @group_due_date }
      else
        format.html { render action: "new" }
        format.json { render json: @group_due_date.errors, status: :unprocessable_entity }
      end
    end
  end
=end

  # PUT /group_due_dates/1
  # PUT /group_due_dates/1.json
  def update
    @group_due_date = GroupDueDate.find(params[:id])

    respond_to do |format|
      if @group_due_date.update_attributes(params[:group_due_date])
        format.html { redirect_to admin_path, notice: 'Group due date was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @group_due_date.errors, status: :unprocessable_entity }
      end
    end
  end

  def forbid_now 
    @group_due_date = GroupDueDate.find(1)

    respond_to do |format|
      if @group_due_date.update_attributes(:due_date => Time.now)
        format.html { redirect_to admin_path, notice: 'Group due date was successfully updated.' }
        format.json { head :no_content }
      else
        format.html { render action: "edit" }
        format.json { render json: @group_due_date.errors, status: :unprocessable_entity }
      end
    end
  end

=begin
  # DELETE /group_due_dates/1
  # DELETE /group_due_dates/1.json
  def destroy
    @group_due_date = GroupDueDate.find(params[:id])
    @group_due_date.destroy

    respond_to do |format|
      format.html { redirect_to group_due_dates_url }
      format.json { head :no_content }
    end
  end
=end

end
