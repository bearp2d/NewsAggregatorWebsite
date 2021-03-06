Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  root 'static_pages#root'

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create, :destroy]
    resource :sessions, only: [:create, :destroy]

    resources :feeds, only: [:index, :create, :destroy]
    resources :feed_sources, only: [:create, :destroy]
    resources :news_sources, only: [:index]
    resources :favorites, only: [:create, :index, :destroy]
  end
end
