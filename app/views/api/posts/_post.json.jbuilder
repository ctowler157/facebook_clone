json.extract! post, :id, :author_id, :timeline_id, :body, :created_at

json.author do
  json.partial! 'users/user', user: post.author
end
