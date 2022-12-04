Rails.application.routes.draw do
  resources :drink_inspos
  resources :food_inspos
  resources :recipe_inspos
  resources :drink_menus
  resources :food_menus
  resources :vibes
  resources :guests
  resources :users
  resources :dinner_parties
  # Define your application routes per the DSL in https://guides.rubyonrails.org/routing.html

  # Defines the root path route ("/")
  # root "articles#index"

# custom auth routes
# save user info to sessions
  post "/login", to: "sessions#create"
  # delete user info from sessions
  delete "/logout", to: "sessions#destroy"
  # route our app runs before it allows access to pages
  get '/authorized_user', to: "users#show"


end
