class ChangeBios < ActiveRecord::Migration
  def change
    change_column_null :bios, :birthday, true
  end
end
