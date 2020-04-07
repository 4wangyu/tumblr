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

    namespace :collections do
      get 'dashboard'
      get 'explore'
      get 'search'
      get 'likes'
      get 'radar'

      get 'recommended'
      get 'followers'
      get 'followees'
    end

    namespace :open_graph do
      post 'fetch'
    end
  end

  get '*path', to: 'static_pages#root', constraints: lambda { |req|
    ['rails/active_storage', 'assets'].all? { |v_path| req.path.exclude? v_path }
  }

  root "static_pages#root"
end
