const NewsAPI = require('newsapi');

export const fetchTopHeadlines = () => {
  const apiKey = window.news_api_key;
  const newsapi = new NewsAPI(apiKey);
  return newsapi.v2.topHeadlines({
    category: 'politics',
    language: 'en',
    country: 'us'
  });
};

// export const fetchAllSources = (api_key) => {
//   const apiKey = window.news_api_key;
//   const newsapi = new NewsAPI(apiKey);
//   return newsapi.v2.sources({
//     language: 'en',
//     country: 'us'
//   });
// };
