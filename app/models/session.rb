# == Schema Information
#
# Table name: sessions
#
#  id            :bigint(8)        not null, primary key
#  user_id       :integer          not null
#  session_token :string           not null
#  created_at    :datetime         not null
#  updated_at    :datetime         not null
#

class Session < ApplicationRecord
  validates :user_id, :session_token, presence: true

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User,
    inverse_of: :sessions
end
