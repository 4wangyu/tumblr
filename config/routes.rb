Rails.application.routes.draw do

  namespace :api, defaults: { format: :json } do
    resources :users, only: [:index, :create, :show] do 
      resource :follows, only: [:create, :destroy]
    end
    resource :sessions, only: [:create, :destroy]
    resources :posts, only: [:index, :create, :show, :destroy] do
      resource :likes, only: [:create, :destroy]
      post :all_tags, to: 'tags#all_tags'
    end
  end

  get '*path', to: 'static_pages#root', constraints: lambda { |req|
    ['rails/active_storage', 'assets'].all? { |v_path| req.path.exclude? v_path }
  }

  root "static_pages#root"
end
