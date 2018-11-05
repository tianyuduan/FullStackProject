Rails.application.routes.draw do
  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
  # root static_pages#root

  namespace :api, defaults: {format: :json} do
    resources :users, only: [:create]
    resource :session, only: [:create, :destroy, :show]
    resources :photos, only: [:index, :create, :destroy, :show, :update]
    resources :tags, only: [:index, :show]
    resources :comments, only: [:create, :destroy, :show]
  end

  root "static_pages#root"

end
