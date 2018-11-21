# == Schema Information
#
# Table name: articles
#
#  id          :bigint(8)        not null, primary key
#  source_id   :string           not null
#  url         :string           not null
#  urlToImage  :string
#  title       :string           not null
#  author      :string
#  publishedAt :string
#  description :text
#  content     :text
#

class Article < ApplicationRecord
  validates :source_id, :url, :title, presence: true
  validates :url, uniqueness: true

  has_many :favorites,
    primary_key: :id,
    foreign_key: :article_id,
    class_name: :Favorite

  has_many :users,
    through: :favorites,
    source: :user
end
