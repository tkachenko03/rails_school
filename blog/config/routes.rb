Rails.application.routes.draw do
 
  get 'persons/profile'

  devise_for :users
  resources :articles do
  resources :comments
end

  resources :categories do

  end
 
root 'welcome#index'
get 'persons/profile', as: 'user_root'

end
