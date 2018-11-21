import React from 'react';
import { connect } from 'react-redux';

import { fetchTopHeadlines,
  updateTopHeadlines } from '../../../actions/news_api_actions';
import { fetchAllFeeds, fetchAllSources } from '../../../actions/feed_actions';
import { openModal } from '../../../actions/modal_actions';
import ArticlesPage from './articles_page';

const mapStateToProps = (state) => ({
  contentType: "TopHeadlines",
  title: "Today",
  info: "The insights you need to get the inside edge",
  saved: false,
  articles: state.entities.articles,
  sourceList: null
});

const mapDispatchToProps = (dispatch) => ({
  fetchRelevantArticles: (sourceList, page) =>
    dispatch(fetchTopHeadlines(page)),
  updateRelevantArticles: (sourceList, page) =>
    dispatch(updateTopHeadlines(page)),
  fetchAllFeeds: () => dispatch(fetchAllFeeds()),
  fetchAllSources: () => dispatch(fetchAllSources())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesPage);
