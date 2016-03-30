class Post < ActiveRecord::Base
	validates :author_id, :timeline_id, :body, presence: true

	belongs_to :timeline, class_name: "User", foreign_key: :timeline_id

	belongs_to :author, class_name: "User", foreign_key: :author_id



end
