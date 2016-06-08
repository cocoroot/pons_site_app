Rails.application.routes.draw do
  get 'top/index'

  get 'creation_detail/index'
  get 'creator/:id' => 'site_user_detail#index'

  get 'login/login'

  scope :api do
    with_options(defaults: { format: :json }, format: false) do
      # post 'create_user'
      post 'site_users' => 'core_api#create_site_user'
      get 'site_users/:id' => 'core_api#show_site_user'
      get 'me' => 'core_api#show_site_user'
      put 'me' => 'core_api#update_site_user'
      post 'my/user_image' => 'core_api#create_site_user_image'
      post 'my/user_header_image' => 'core_api#create_site_user_header_image'

      post 'creations/' => 'core_api#create_creation'
      get 'creations/:id' => 'core_api#show_creation'
      put 'creations/:id' => 'core_api#update_creation'

      post 'creations/:id/creation_images' => 'core_api#create_creation_image'
      get 'creation_images/:id' => 'core_api#show_creation_image'
      put 'creation_images/:id' => 'core_api#update_creation_image'
      delete 'creation_images/:id' => 'core_api#delete_creation_image'

      post 'creation_pieces' => 'core_api#create_creation_piece'
      put 'creation_pieces' => 'core_api#update_creation_piece'
      delete 'cleation_pieces' => 'core_api#delete_cleation_piece'

      post 'creation/id:/creation_tags' => 'core_api#create_creation_tag'
      delete 'creation_tags/id' => 'core_api#delete_creation_tag'

      post 'creation_comments' => 'core_api#create_creation_comment'
      post 'goods' => 'core_api#create_good'
      get 'goods' => 'core_api#index_good'
      delete 'goods' => 'core_api#delete_good'
    end
  end

  get 'gitfab/index'

  get 'hello/index'

  # The priority is based upon order of creation: first created -> highest priority.
  # See how all your routes lay out with "rake routes".

  # You can have the root of your site routed with "root"
  # root 'welcome#index'

  # Example of regular route:
  #   get 'products/:id' => 'catalog#view'

  # Example of named route that can be invoked with purchase_url(id: product.id)
  #   get 'products/:id/purchase' => 'catalog#purchase', as: :purchase

  # Example resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Example resource route with options:
  #   resources :products do
  #     member do
  #       get 'short'
  #       post 'toggle'
  #     end
  #
  #     collection do
  #       get 'sold'
  #     end
  #   end

  # Example resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Example resource route with more complex sub-resources:
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', on: :collection
  #     end
  #   end

  # Example resource route with concerns:
  #   concern :toggleable do
  #     post 'toggle'
  #   end
  #   resources :posts, concerns: :toggleable
  #   resources :photos, concerns: :toggleable

  # Example resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end
end
