Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :sessions, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :show, :destroy]
  end

  get '*path', to: 'static_pages#root', constraints: lambda { |req|
    req.path.exclude? 'rails/active_storage'
  }

  root "static_pages#root"
end
