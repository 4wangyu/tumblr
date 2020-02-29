Rails.application.routes.draw do
  namespace :api, defaults: { format: :json } do
    resource :sessions, only: [:create, :destroy]

    resources :users, only: [:create, :show] do 
      resource :follows, only: [:create, :destroy]
    end
    
    resources :posts, only: [:create, :show, :destroy] do
      resource :likes, only: [:create, :destroy]
      post :all_tags, to: 'tags#all_tags'
    end

    resources :reblogs, only: [:create, :show, :destroy] do
      resource :likes, only: [:create, :destroy]
      post :all_tags, to: 'tags#all_tags'
    end

    get 'feed/dashboard'
    get 'feed/trending'
    get 'feed/search'
  end

  get '*path', to: 'static_pages#root', constraints: lambda { |req|
    ['rails/active_storage', 'assets'].all? { |v_path| req.path.exclude? v_path }
  }

  root "static_pages#root"
end
