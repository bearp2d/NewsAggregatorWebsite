const NewsAPI = require('newsapi');

export const fetchTopHeadlines = () => {
  const apiKey = window.news_api_key;
  const newsapi = new NewsAPI(apiKey);
  return newsapi.v2.topHeadlines({
    language: 'en'
  });
};

export const fetchAllArticles = (sourceList) => {
  const apiKey = window.news_api_key;
  const newsapi = new NewsAPI(apiKey);
  return newsapi.v2.everything({
    sources: sourceList.join(","),
    language: 'en',
    page: 1
  });
};

export const fetchFeedArticles = (sourceList) => {
  const apiKey = window.news_api_key;
  const newsapi = new NewsAPI(apiKey);
  return newsapi.v2.everything({
    sources: sourceList.join(","),
    language: 'en',
    page: 1
  });
}
