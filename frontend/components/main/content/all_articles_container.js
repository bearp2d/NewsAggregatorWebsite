import React from 'react';
import { connect } from 'react-redux';

import { fetchAllArticles } from '../../../actions/news_api_actions';
import { fetchAllFeeds, fetchAllSources } from '../../../actions/feed_actions';
import { openModal } from '../../../actions/modal_actions';
import ArticlesPage from './articles_page';

const mapStateToProps = (state) => ({
  contentType: "AllArticles",
  title: "All",
  info: "The most recent articles from all of your feeds",
  articles: state.entities.articles,
  sourceList: state.entities.user.source_list
});

const mapDispatchToProps = (dispatch) => ({
  fetchRelevantArticles: (source_list) =>
    dispatch(fetchAllArticles(source_list)),
  fetchAllFeeds: () => dispatch(fetchAllFeeds()),
  fetchAllSources: () => dispatch(fetchAllSources())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesPage);
