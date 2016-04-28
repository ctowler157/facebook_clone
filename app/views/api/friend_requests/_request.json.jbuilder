json.extract! request, :id, :sender_id, :target_id, :accepted

json.sender do
  json.partial! 'users/user', user: request.sender
end
