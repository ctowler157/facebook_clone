json.array! @requests do |request|
	json.partial! 'request', request: request
end
