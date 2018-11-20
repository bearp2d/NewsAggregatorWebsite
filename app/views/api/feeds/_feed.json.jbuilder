json.id feed.id
json.feed_name feed.feed_name
json.source_ids feed.news_sources.pluck(:id)
json.source_list feed.news_sources.pluck(:source_id)
