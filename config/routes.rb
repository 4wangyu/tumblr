Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :show]
    resource :sessions, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :show, :update, :destroy]
  end

  get '*path', to: 'static_pages#root'

  root to: "static_pages#root"
end
