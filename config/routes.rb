Rails.application.routes.draw do
  get 'site_work_detail/index'

  scope :api do
    with_options(defaults: { format: :json }, format: false) do
      # post 'create_user'
      post 'users' => 'core_api#create_user'
      get 'users/:id' => 'core_api#show_user'
      get 'me' => 'core_api#show_my_info'
      put 'me' => 'core_api#update_user'
      post 'my/user_image' => 'core_api#create_user_image'
      post 'my/user_header_image' => 'core_api#create_user_header_image'
      get 'users/:user_id/creations' => 'core_api#index_creation_created_by_user'
      get 'users/:user_id/goods' => 'core_api#index_good_by_user'

      post 'works' => 'core_api#create_creation'
      get 'works/:id' => 'core_api#show_creation'
      put 'works/:id' => 'core_api#update_creation'

      post 'works/:id/work_images' => 'core_api#create_creation_image'
      get 'work_images/:id' => 'core_api#show_creation_image'
      put 'work_images/:id' => 'core_api#update_creation_image'
      delete 'work_images/:id' => 'core_api#delete_creation_image'

      post 'work_pieces' => 'core_api#create_creation_piece'
      put 'work_pieces' => 'core_api#update_creation_piece'
      delete 'cleation_pieces' => 'core_api#delete_cleation_piece'

      post 'work/id:/work_tags' => 'core_api#create_creation_tag'
      delete 'work_tags/id' => 'core_api#delete_creation_tag'

      post 'work_comments' => 'core_api#create_creation_comment'
      post 'goods' => 'core_api#create_good'
      delete 'goods' => 'core_api#delete_good'

      match '*path', to: 'errors#routing_error', via: :all
    end
  end

  root to: 'site_app#index'
  get '*path' => 'site_app#index'

  # get 'sample/show'

  # get 'site_top/index'
  # get 'site_new_work_list/index'
  # get 'creator/:id' => 'site_user_detail#index'
  # get 'site_work_detail/index'
  # get 'site_tag_work_list/index'

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
