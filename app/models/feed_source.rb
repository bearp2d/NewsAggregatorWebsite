# == Schema Information
#
# Table name: feed_sources
#
#  id         :bigint(8)        not null, primary key
#  feed_id    :integer          not null
#  source_id  :integer          not null
#  created_at :datetime         not null
#  updated_at :datetime         not null
#

class FeedSource < ApplicationRecord
  validates :feed_id, :source_id, presence: true
  validates_uniqueness_of :feed_id, scope: :source_id

  belongs_to :feed,
    primary_key: :id,
    foreign_key: :feed_id,
    class_name: :Feed

  belongs_to :news_source,
    primary_key: :id,
    foreign_key: :source_id,
    class_name: :NewsSource
end
