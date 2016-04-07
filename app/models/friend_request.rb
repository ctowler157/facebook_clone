class FriendRequest < ActiveRecord::Base
  validates :sender_id, :target_id, presence: true
  validates :target_id, uniqueness: { scope: :sender_id }

	belongs_to :sender, class_name: "User"

	belongs_to :target, class_name: "User"
end
