require 'test_helper'

class GroupDueDatesControllerTest < ActionController::TestCase
  setup do
    @group_due_date = group_due_dates(:one)
  end

  test "should get index" do
    get :index
    assert_response :success
    assert_not_nil assigns(:group_due_dates)
  end

  test "should get new" do
    get :new
    assert_response :success
  end

  test "should create group_due_date" do
    assert_difference('GroupDueDate.count') do
      post :create, group_due_date: @group_due_date.attributes
    end

    assert_redirected_to group_due_date_path(assigns(:group_due_date))
  end

  test "should show group_due_date" do
    get :show, id: @group_due_date
    assert_response :success
  end

  test "should get edit" do
    get :edit, id: @group_due_date
    assert_response :success
  end

  test "should update group_due_date" do
    put :update, id: @group_due_date, group_due_date: @group_due_date.attributes
    assert_redirected_to group_due_date_path(assigns(:group_due_date))
  end

  test "should destroy group_due_date" do
    assert_difference('GroupDueDate.count', -1) do
      delete :destroy, id: @group_due_date
    end

    assert_redirected_to group_due_dates_path
  end
end
