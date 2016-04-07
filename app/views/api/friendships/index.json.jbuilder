json.array! @friends do |friend|
	json.extract! friend, :id, :first_name, :last_name
end
