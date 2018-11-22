import React from 'react';
import { connect } from 'react-redux';

import { fetchSearchArticles,
  updateSearchArticles } from '../../../../actions/news_api_actions';
import { fetchAllFeeds, fetchAllSources } from '../../../../actions/feed_actions';
import { openModal } from '../../../../actions/modal_actions';
import ArticlesPage from '../articles_page';

const mapStateToProps = (state, ownProps) => ({
  contentType: "SearchArticles",
  title: ownProps.match.params.searchQuery,
  info: "",
  saved: false,
  articles: state.entities.articles,
  sourceList: null,
  searchQuery: ownProps.match.params.searchQuery
});

const mapDispatchToProps = (dispatch) => ({
  fetchRelevantArticles: (source_list, searchQuery, page) =>
    dispatch(fetchSearchArticles(searchQuery, page)),
  updateRelevantArticles: (source_list, searchQuery, page) =>
    dispatch(updateSearchArticles(searchQuery, page)),
  fetchAllFeeds: () => dispatch(fetchAllFeeds()),
  fetchAllSources: () => dispatch(fetchAllSources())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesPage);
