class FriendRequest < ActiveRecord::Base
	belongs_to :sender, class_name: "User"

	belongs_to :target, class_name: "User"
end