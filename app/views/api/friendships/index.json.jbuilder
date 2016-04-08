json.array! @friendships do |friendship|
  friend = friendship.friend
	json.extract! friend, :id, :first_name, :last_name
  json.profile_pic_url asset_path(friend.profile_pic.url(:original))

  json.friendshipId friendship.id
end
