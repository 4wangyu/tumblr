Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resource :sessions, only: [:create, :destroy]

    resources :users, only: [:create, :show] do 
      resource :follows, only: [:create, :destroy]
    end
    
    resources :posts, only: [:create, :update, :show, :destroy] do
      resource :likes, only: [:create, :destroy]
      delete :purge_attachment, on: :member
    end

    resources :reblogs, only: [:create, :show, :update, :destroy]

    namespace :feed do
      get 'dashboard'
      get 'trending'
      get 'search'
    end

    namespace :sidebar do
      get 'recommended_users'
      get 'radar_post'
    end
  end

  get '*path', to: 'static_pages#root', constraints: lambda { |req|
    ['rails/active_storage', 'assets'].all? { |v_path| req.path.exclude? v_path }
  }

  root "static_pages#root"
end
