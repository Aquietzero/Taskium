module GroupsHelper

  def get_manager(group)
    group.users.each do |user|
      return user if user.role == 'MANAGER'
    end
  end
end
