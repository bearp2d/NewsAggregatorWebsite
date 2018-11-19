# == Schema Information
#
# Table name: feeds
#
#  id        :bigint(8)        not null, primary key
#  user_id   :integer          not null
#  feed_name :string           not null
#

class Feed < ApplicationRecord
  validates :feed_name, :user_id, presence: true
  validates_uniqueness_of :user_id, scope: :feed_name

  validates :feed_name, length: {minimum: 1}

  belongs_to :user,
    primary_key: :id,
    foreign_key: :user_id,
    class_name: :User

  has_many :feed_sources,
    primary_key: :id,
    foreign_key: :feed_id,
    class_name: :FeedSource

  has_many :news_sources,
    through: :feed_sources,
    source: :news_source
end
