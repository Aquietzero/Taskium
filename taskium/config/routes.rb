Taskium::Application.routes.draw do

  get "taskium/index"
  get "student_admin" => "student_admin#index"

  get "admin" => "admin#index"

  resources :group_due_dates
  controller :group_due_dates do
    get 'forbid_group_operation' => :forbid_now
  end

  controller :score_and_ranking do
    get 'manager_evaluation' => :manager_evaluation
    get 'teacher_evaluation' => :teacher_evaluation
    get 'calculate_group_rank' => :calculate_group_rank 
    get 'calculate_class_rank' => :calculate_class_rank 
  end

  resources :homeworks

  controller :homework_view_and_score do
    get 'homework_view_and_score' => :index
    get 'homework_view_and_score/show_source' => :show_source
    get 'homework_view_and_score/file_tree' => :file_tree
    get 'homework_view_and_score/evaluate'  => :evaluate
    post 'homework_view_and_score/evaluated'  => :evaluated
    get 'homework_view_and_score/teacher_evaluate'  => :teacher_evaluate
    post 'homework_view_and_score/teacher_evaluated'  => :teacher_evaluated
  end

  resources :groups
  controller :groups do
    get 'groups/join/:id' => :join
    get 'groups/quit/:id' => :quit
  end

  controller :sessions do
    get    'login'  => :new
    post   'login'  => :create
    get    'logout' => :destroy
    delete 'logout' => :destroy
  end

  resources :users
  controller :users do
    get 'register' => :new
  end

  resources :tags

  resources :categories

  resources :comments do
    resources :comments
  end

  resources :posts
  resources :posts do
    resources :comments
  end

  resources :tasks
  resources :tasks do
    resources :comments
  end

  # The priority is based upon order of creation:
  # first created -> highest priority.

  # Sample of regular route:
  #   match 'products/:id' => 'catalog#view'
  # Keep in mind you can assign values other than :controller and :action

  # Sample of named route:
  #   match 'products/:id/purchase' => 'catalog#purchase', :as => :purchase
  # This route can be invoked with purchase_url(:id => product.id)

  # Sample resource route (maps HTTP verbs to controller actions automatically):
  #   resources :products

  # Sample resource route with options:
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

  # Sample resource route with sub-resources:
  #   resources :products do
  #     resources :comments, :sales
  #     resource :seller
  #   end

  # Sample resource route with more complex sub-resources
  #   resources :products do
  #     resources :comments
  #     resources :sales do
  #       get 'recent', :on => :collection
  #     end
  #   end

  # Sample resource route within a namespace:
  #   namespace :admin do
  #     # Directs /admin/products/* to Admin::ProductsController
  #     # (app/controllers/admin/products_controller.rb)
  #     resources :products
  #   end

  # You can have the root of your site routed with "root"
  # just remember to delete public/index.html.
  root :to => 'taskium#index', :as => 'taskium'

  # See how all your routes lay out with "rake routes"

  # This is a legacy wild controller route that's not recommended for RESTful applications.
  # Note: This route will make all actions in every controller accessible via GET requests.
  # match ':controller(/:action(/:id))(.:format)'
end
