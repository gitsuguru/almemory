Rails.application.routes.draw do
  devise_for :users
  root "groups#index"
  resources :users, only: [:index, :edit, :update]
  resources :groups, only: [:new, :create, :edit, :update, :destroy] do
    resources :memos, only: [:index, :new, :create, :destroy, :edit, :update]
    resources :prices, only: [:index, :new, :create, :edit, :update, :destroy]
    namespace :api do
      resources :prices, only: :index, defaults: { format: 'json' }
    end
    resources :messages, only: [:index, :create]
    namespace :api do
      resources :messages, only: :index, defaults: { format: 'json' }
    end
  end
end