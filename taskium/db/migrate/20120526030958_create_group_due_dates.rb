class CreateGroupDueDates < ActiveRecord::Migration
  def change
    create_table :group_due_dates do |t|
      t.datetime :due_date

      t.timestamps
    end
  end
end
