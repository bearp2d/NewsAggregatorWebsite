import * as NewsApiUtil from '../util/news_api_util';

export const RECEIVE_ALL_ARTICLES = "RECEIVE_ALL_ARTICLES";
export const RECEIVE_API_ERRORS = "RECEIVE_API_ERRORS";

export const receiveAllArticles = (articles) => ({
  type: RECEIVE_ALL_ARTICLES,
  articles: articles
});

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

export const fetchAllArticles = (sourceList) => (dispatch) => (
  NewsApiUtil.fetchAllArticles(sourceList).then(
    res => dispatch(receiveAllArticles(res.articles)),
    errors => dispatch(receiveErrors(errors))
  )
);
