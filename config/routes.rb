Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resource :sessions, only: [:create, :destroy]

    resources :users, only: [:create, :show] do 
      resource :follows, only: [:create, :destroy]
    end
    
    resources :posts, only: [:create, :update, :show, :destroy] do
      resource :likes, only: [:create, :destroy]
    end

    resources :reblogs, only: [:create, :show, :update, :destroy]

    get 'feed/dashboard'
    get 'feed/trending'
    get 'feed/search'

    get 'sidebar/recommended_users'
    get 'sidebar/radar_post'
  end

  get '*path', to: 'static_pages#root', constraints: lambda { |req|
    ['rails/active_storage', 'assets'].all? { |v_path| req.path.exclude? v_path }
  }

  root "static_pages#root"
end
