import React from 'react';
import { connect } from 'react-redux';

import { fetchAllFeeds,
  fetchAllSources,
  fetchAllFavorites } from '../../../actions/feed_actions';
import { openModal } from '../../../actions/modal_actions';
import ArticlesPage from './articles_page';

const mapStateToProps = (state) => ({
  contentType: "FavoriteArticles",
  title: "Read Later",
  info: "",
  saved: true,
  articles: state.entities.articles,
  sourceList: null
});

// here fetchAllFavorites does not need a page specification because it doesnt
// query the NewsApi
const mapDispatchToProps = (dispatch) => ({
  fetchRelevantArticles: (page) =>
    dispatch(fetchAllFavorites()),
  fetchAllFeeds: () => dispatch(fetchAllFeeds()),
  fetchAllSources: () => dispatch(fetchAllSources())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesPage);
