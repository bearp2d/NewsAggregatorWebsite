const NewsAPI = require('newsapi');

export const fetchTopHeadlines = (page = 1) => {
  const apiKey = window.news_api_key;
  const newsapi = new NewsAPI(apiKey);
  return newsapi.v2.topHeadlines({
    language: 'en',
    page: page
  });
};

// used both for All Articles Page and for Feed Articles Page
// but with different sourceLists
export const fetchAllArticles = (sourceList, page) => {
  const apiKey = window.news_api_key;
  const newsapi = new NewsAPI(apiKey);
  return newsapi.v2.everything({
    sources: sourceList.join(","),
    language: 'en',
    page: page
  });
};
