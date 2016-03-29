Rails.application.routes.draw do
  resources :users, only: [:new, :create]
  resource :session, only: [:new, :create, :destroy]
  resource :static_pages, only: [:root]

  root to: "static_pages#root"
end
