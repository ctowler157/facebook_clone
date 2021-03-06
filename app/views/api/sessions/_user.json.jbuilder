json.extract! user, :id, :first_name, :last_name, :birthday

json.profile_pic_url asset_path(user.profile_pic.url(:original))
json.profile_thumb_url asset_path(user.profile_pic.url(:thumb))
json.cover_photo_url asset_path(user.cover_photo.url(:original))
