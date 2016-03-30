Rails.application.routes.draw do
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resource :static_pages, only: [:root]

	namespace :api, defaults: { format: :json } do
		resources :posts, only: [:index, :show, :create, :update, :destroy]
	end

  root to: "static_pages#root"
end
