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

export const fetchAllSources = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/news_sources'
  });
};

export const createNewFollow = (feed_id, source_id) => {
  return $.ajax({
    method: 'POST',
    url: '/api/feed_sources',
    data: {feed_id, source_id}
  })
};

export const createNewFavorite = (article) => {
  return $.ajax({
    method: 'POST',
    url: '/api/favorites',
    data: {article: article}
  })
};

export const fetchAllFavorites = () => {
  return $.ajax({
    method: 'GET',
    url: '/api/favorites'
  })
};
