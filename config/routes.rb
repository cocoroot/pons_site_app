Rails.application.routes.draw do

  get 'site_new_work_list/index' => 'site_new_work_list#index'

  scope :api do
    with_options(defaults: { format: :json }, format: false) do
      # post 'create_user'
      post 'users' => 'pons_api#create_user'
      get 'users/:id' => 'pons_api#show_user'
      get 'me' => 'pons_api#show_my_info'
      put 'me' => 'pons_api#update_user'
      post 'my/user_image' => 'pons_api#create_user_image'
      post 'my/user_header_image' => 'pons_api#create_user_header_image'
      get 'users/:user_id/works' => 'pons_api#index_works_created_by_user'
      get 'users/:user_id/likes' => 'pons_api#index_likes_by_user'

      post 'works' => 'pons_api#create_work'
      get 'works/latest' => 'pons_api#index_latest_works'
      get 'works/:id' => 'pons_api#show_work'
      put 'works/:id' => 'pons_api#update_work'
      post 'works/:work_id/work_images' => 'pons_api#create_work_image'
      post 'works/:work_id/work_pieces' => 'pons_api#create_work_piece'
      post 'works/:work_id/work_tags' => 'pons_api#create_work_tag'
      get 'works/:work_id/work_comments' => 'pons_api#index_work_comments'
      post 'works/:work_id/work_comments' => 'pons_api#create_work_comment'
      post 'works/:work_id/like' => 'pons_api#create_like'
      delete 'works/:work_id/like' => 'pons_api#delete_like'

      get 'work_images/:id' => 'pons_api#show_work_image'
      put 'work_images/:id' => 'pons_api#update_work_image'
      delete 'work_images/:id' => 'pons_api#delete_work_image'

      put 'work_pieces/:id' => 'pons_api#update_work_piece'
      delete 'work_pieces/:id' => 'pons_api#delete_work_piece'

      delete 'work_tags/:id' => 'pons_api#delete_work_tag'

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
