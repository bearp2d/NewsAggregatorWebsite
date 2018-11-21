import * as NewsApiUtil from '../util/news_api_util';

export const RECEIVE_ALL_ARTICLES = "RECEIVE_ALL_ARTICLES";
export const UPDATE_ARTICLES = "UPDATE_ALL_ARTICLES";
export const RECEIVE_API_ERRORS = "RECEIVE_API_ERRORS";

export const receiveAllArticles = (articles) => ({
  type: RECEIVE_ALL_ARTICLES,
  articles: articles
});

export const updateArticles = (articles) => ({
  type: UPDATE_ARTICLES,
  articles: articles
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_API_ERRORS,
  errors: errors
});

export const fetchTopHeadlines = (page = 1) => (dispatch) => (
  NewsApiUtil.fetchTopHeadlines(page).then(
    res => dispatch(receiveAllArticles(res.articles)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const fetchAllArticles = (sourceList, page = 1) => (dispatch) => (
  NewsApiUtil.fetchAllArticles(sourceList, page).then(
    res => dispatch(receiveAllArticles(res.articles)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const updateTopHeadlines = (page = 1) => (dispatch) => (
  NewsApiUtil.fetchTopHeadlines(page).then(
    res => dispatch(updateArticles(res.articles)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const updateAllArticles = (sourceList, page = 1) => (dispatch) => (
  NewsApiUtil.fetchAllArticles(sourceList, page).then(
    res => dispatch(updateArticles(res.articles)),
    errors => dispatch(receiveErrors(errors))
  )
);
