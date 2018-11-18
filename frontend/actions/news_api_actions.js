import * as NewsApiUtil from '../util/news_api_util';

export const RECEIVE_ALL_ARTICLES = "RECEIVE_ALL_ARTICLES";
export const RECEIVE_ALL_SOURCES = "RECEIVE_ALL_SOURCES";

export const receiveAllArticles = (articles) => ({
  type: RECEIVE_ALL_ARTICLES,
  articles: articles
});

export const receiveAllSources = (sources) => ({
  type: RECEIVE_ALL_SOURCES,
  sources: sources
})

export const receiveErrors = (errors) => ({
  type: RECEIVE_API_ERRORS,
  errors: errors
});

export const fetchTopHeadlines = () => (dispatch) => (
  NewsApiUtil.fetchTopHeadlines().then(
    res => dispatch(receiveAllArticles(res.articles)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const fetchAllSources = () => (dispatch) => (
  NewsApiUtil.fetchAllSources().then(
    sources => dispatch(receiveAllSources(sources)),
    errors => dispatch(receiveErrors(errors))
  )
);
