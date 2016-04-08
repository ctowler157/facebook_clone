Rails.application.routes.draw do
  resources :users, defaults: { format: :json }, only: [:new, :create, :show, :update]
  resource :static_pages, only: [:root]

	namespace :api, defaults: { format: :json } do
		resource :session, only: [:show, :create, :destroy]
		resources :posts, only: [:index, :show, :create, :update, :destroy]
		resources :friend_requests, only: [:index, :show, :create, :destroy, :update]
		resources :friendships, only: [:show, :index, :create, :destroy]
	end

  root to: "static_pages#root"
end
