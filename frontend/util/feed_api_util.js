export const createNewFeed = (feed_name) => {
  return $.ajax({
    method: 'POST',
    url: '/api/feeds',
    data: {feed_name: feed_name}
  });
};

export const fetchAllFeeds = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/feeds'
  });
};
