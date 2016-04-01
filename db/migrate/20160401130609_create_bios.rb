class CreateBios < ActiveRecord::Migration
  def change
    create_table :bios do |t|
      t.integer :user_id, null: false, indexed: true
      t.string :first_name, null: false
      t.string :last_name, null: false
      t.date :birthday, null: false

      t.timestamps null: false
    end
  end
end
