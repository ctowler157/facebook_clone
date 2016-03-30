class CreatePosts < ActiveRecord::Migration
  def change
    create_table :posts do |t|
			t.string :body, null: false
			t.integer :author_id, null: false, index: true
			t.integer :timeline_id, null: false, index: true
      t.timestamps null: false
    end
  end
end
