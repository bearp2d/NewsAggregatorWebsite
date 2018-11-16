const NewsAPI = require('newsapi');
const api_key = window.news_api_key;
const newsapi = new NewsAPI(api_key);

export const fetchTopHeadlines = () => {
  return newsapi.v2.topHeadlines({
    category: 'politics',
    language: 'en',
    country: 'us'
  });
};

export const fetchAllSources = () => {
  return newsapi.v2.sources({
    language: 'en',
    country: 'us'
  })
}
