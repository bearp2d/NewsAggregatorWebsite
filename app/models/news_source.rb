# == Schema Information
#
# Table name: news_sources
#
#  id                 :bigint(8)        not null, primary key
#  source_name        :string           not null
#  source_logo_url    :string
#  source_description :text
#  source_url         :string           not null
#  source_id          :string
#

class NewsSource < ApplicationRecord
  validates :source_name, :source_url, presence: true

  has_many :source_feeds,
    primary_key: :id,
    foreign_key: :source_id,
    class_name: :FeedSource

end
