json.id user.id
json.username user.username
json.demo user.demo

# To include the users feed_id array in the user slice of state

json.feed_ids user.feeds.pluck(:id)

json.source_list user.news_sources.pluck(:source_id)
