const NewsAPI = require('newsapi');

export const fetchTopHeadlines = () => {
  const apiKey = window.news_api_key;
  const newsapi = new NewsAPI(apiKey);
  return newsapi.v2.topHeadlines({
    language: 'en'
  });
};

export const fetchAllArticles = (sourceList) => {
  debugger
  const apiKey = window.news_api_key;
  const newsapi = new NewsAPI(apiKey);
  return newsapi.v2.everything({
    domains: sourceList.join(","),
    language: 'en',
    page: 1
  });
};
