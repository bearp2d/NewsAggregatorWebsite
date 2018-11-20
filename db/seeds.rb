# This file should contain all the record creation needed to seed the database with its default values.
# The data can then be loaded with the rails db:seed command (or created alongside the database with db:setup).
#
# Examples:
#
#   movies = Movie.create([{ name: 'Star Wars' }, { name: 'Lord of the Rings' }])
#   Character.create(name: 'Luke', movie: movies.first)
require 'byebug'
require 'news-api'

NewsSource.delete_all

api_key = Rails.application.credentials.news_api[:api_key]
newsapi = News.new(api_key)

sources = newsapi.get_sources(language: 'en')

sources.each do |source|
  begin
    NewsSource.create!(
       source_name: source.name,
       source_id: source.id,
       source_description: source.description,
       source_url: source.url)
  rescue
    next
  end
end
