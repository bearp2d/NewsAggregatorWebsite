json.id user.id
json.username user.username

# To include the users feed_id array in the user slice of state

# json.feed_ids json.array!(user.feeds) do |feed|
#   feed.id
# end
