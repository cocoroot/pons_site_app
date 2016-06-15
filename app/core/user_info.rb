
class UserInfo
  attr_reader :ex_user_id
  attr_reader :roles
  attr_reader :errors

  def initialize(id = '', roles = [Role::UNAUTHENTICATED])
    @ex_user_id = id
    @roles = Set.new
    roles = [] unless roles.is_a?(Array)
    roles.each do |role|
      @roles << role if Role.include?(role)
      # Rails.logger.debug "UserInfo role #{role} added."
    end
  end

  def valid?
    @errors = []
    @errors << 'invalid ex_user_id for UserInfo' unless ex_user_id_is_valid?
    @errors << 'invalid roles for UserInfo' unless roles_is_valid?

    @errors.empty?
  end

  def ex_user_id_is_valid?
    @ex_user_id.is_a?(String) && @ex_user_id.length > 0
  end

  def roles_is_valid?
    @roles.is_a?(Set) && @roles.reduce(true) { |judge, role| judge && role.is_a?(String) }
  end
end
