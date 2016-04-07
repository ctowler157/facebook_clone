json.array! @friendships do |friendship|
  friend = friendship.friend
	json.extract! friend, :id, :first_name, :last_name

  json.friendshipId friendship.id
end
