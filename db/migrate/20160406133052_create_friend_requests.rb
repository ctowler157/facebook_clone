class CreateFriendRequests < ActiveRecord::Migration
  def change
    create_table :friend_requests do |t|
			t.integer :sender_id, null: false, index: true
			t.integer :target_id, null: false, index: true
			t.boolean :accepted, null: false, default: false

      t.timestamps null: false
    end
  end
end
