const apikey = "97fa43da0174457c85fd336607176e69";
const NewsAPI = require('newsapi');
const newsapi = new NewsAPI(apikey);

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
