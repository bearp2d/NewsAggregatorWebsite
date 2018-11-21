# == Schema Information
#
# Table name: favorites
#
#  id         :bigint(8)        not null, primary key
#  user_id    :integer          not null
#  article_id :integer          not null
#

class Favorite < ApplicationRecord
  validates_uniqueness_of :user_id, scope: :article_id

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  belongs_to :article,
    primary_key: :id,
    foreign_key: :article_id,
    class_name: :Article
end
