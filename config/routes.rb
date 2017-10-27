Rails.application.routes.draw do
  root to: 'pages#index'

  resources :contacts, only: [ :create ]

  # For details on the DSL available within this file, see http://guides.rubyonrails.org/routing.html
end
