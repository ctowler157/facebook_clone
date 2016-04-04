Rails.application.routes.draw do
  resources :users, defaults: { format: :json }, only: [:new, :create, :show]
  resource :static_pages, only: [:root]

	namespace :api, defaults: { format: :json } do
		resource :session, only: [:show, :create, :destroy]
		resources :posts, only: [:index, :show, :create, :update, :destroy]
	end

  root to: "static_pages#root"
end
