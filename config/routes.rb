Rails.application.routes.draw do
  resources :users
  resources :dinner_parties
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"


  post "/login", to: "sessions#create"

end
