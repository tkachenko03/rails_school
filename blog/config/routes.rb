Rails.application.routes.draw do
 
  resources :articles do
  resources :comments
end
 
get '/home', to: 'welcome#index'
end
