import React from 'react';
import { connect } from 'react-redux';

import { fetchTopHeadlines } from '../../../actions/news_api_actions';
import { openModal } from '../../../actions/modal_actions';
import ArticlesPage from './articles_page';

const mapStateToProps = (state) => ({
  contentType: "TopHeadlines",
  title: "Today",
  info: "The insights you need to get the inside edge",
  articles: state.entities.articles,
  sourceList: null
});

const mapDispatchToProps = (dispatch) => ({
  fetchRelevantArticles: () =>
    dispatch(fetchTopHeadlines()),
  openModal: (modal, optional_props) => dispatch(openModal(modal, optional_props))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesPage);
