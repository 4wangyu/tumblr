Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resources :users, only: [:create, :update, :show]
    # resource :sessions, only: [:create, :destroy]
  end

  get '*path', to: 'root#root'

  root to: "static_pages#root"
end
