# == Schema Information
#
# Table name: users
#
#  id              :bigint(8)        not null, primary key
#  username        :string           not null
#  password_digest :string           not null
#  email           :string
#  created_at      :datetime         not null
#  updated_at      :datetime         not null
#

class User < ApplicationRecord
  validates :username, :password_digest, presence: true
  validates :username, uniqueness: true
  validates :password, length: {minimum: 6}, allow_nil: true

  has_many :sessions,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Session

  has_many :feeds,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :Feed

  has_many :sources,
    through: :feeds,
    source: :sources

  attr_reader :password

  def self.find_by_credentials(username, password)
    @user = User.find_by(username: username)
    return nil unless @user && @user.is_password?(password)

    return @user
  end

  def reset_session_token!(current_session_token)
    delete_session!(current_session_token)
    new_session!
  end

  def password=(password)
    @password = password
    self.password_digest = BCrypt::Password.create(password)
  end

  def is_password?(password)
    password_digest_obj = BCrypt::Password.new(self.password_digest)
    password_digest_obj.is_password?(password)
  end

  def delete_session!(current_session_token)
    old_session = Session.find_by(session_token: current_session_token)
    old_session.destroy! if old_session
  end

  def new_session!
    new_session = Session.create!(
      user_id: self.id,
      session_token: generate_session_token)
    new_session.session_token
  end

  private

  def generate_session_token
    SecureRandom.urlsafe_base64
  end

end
