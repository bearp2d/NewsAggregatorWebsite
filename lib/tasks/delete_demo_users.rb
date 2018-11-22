namespace :api do
  desc "Delete demo users after 24 hours"

  task :delete_demo_users => :environment do
    User.expired.destroy_all
  end
end
