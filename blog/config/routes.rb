Rails.application.routes.draw do
 
  resources :articles do
  resources :comments
end

  resources :categories do

  end
 
get '/home', to: 'welcome#index'
end
