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
  info: "Search results from all of your subscribed news sources",
  saved: false,
  articles: state.entities.articles,
  sourceList: state.entities.user.source_list,
  searchQuery: ownProps.match.params.searchQuery
});

const mapDispatchToProps = (dispatch) => ({
  fetchRelevantArticles: (sourceList, searchQuery, page) =>
    dispatch(fetchSearchArticles(sourceList, searchQuery, page)),
  updateRelevantArticles: (sourceList, searchQuery, page) =>
    dispatch(updateSearchArticles(sourceList, searchQuery, page)),
  fetchAllFeeds: () => dispatch(fetchAllFeeds()),
  fetchAllSources: () => dispatch(fetchAllSources())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesPage);
