Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :sessions, only: [:create, :destroy]

    resources :users, only: [:create, :show] do 
      resource :follows, only: [:create, :destroy]
      
      collection do
        get 'followees'
        get 'followers'
        get 'recommended'
        get 'search'
      end
    end
    
    resources :posts, only: [:create, :update, :show, :destroy] do
      resource :likes, only: [:create, :destroy]
      delete :purge_attachment, on: :member

      collection do
        get 'dashboard' 
        get 'explore' 
        get 'likes' 
        get 'radar' 
        get 'search'
      end
    end

    namespace :tags do
      get 'search'
    end

    resources :reblogs, only: [:create, :show, :update, :destroy]

    namespace :open_graph do
      post 'fetch'
    end
  end

  get '*path', to: 'static_pages#root', constraints: lambda { |req|
    ['rails/active_storage', 'assets'].all? { |v_path| req.path.exclude? v_path }
  }

  root "static_pages#root"
end
