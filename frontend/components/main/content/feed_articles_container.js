import React from 'react';
import { connect } from 'react-redux';

import { fetchAllArticles,
  updateAllArticles } from '../../../actions/news_api_actions';
import { fetchAllFeeds, fetchAllSources } from '../../../actions/feed_actions';
import { openModal } from '../../../actions/modal_actions';
import ArticlesPage from './articles_page';


const mapStateToProps = (state, ownProps) => ({
  contentType: "FeedArticles",
  title: ownProps.match.params.feedName,
  info: "",
  saved: false,
  articles: state.entities.articles,
  sourceList: (Object.values(state.entities.feeds).find((feed) =>
    feed.feed_name === ownProps.match.params.feedName).source_list)
});

const mapDispatchToProps = (dispatch) => ({
  fetchRelevantArticles: (source_list, page) =>
    dispatch(fetchAllArticles(source_list, page)),
  updateRelevantArticles: (source_list, page) =>
    dispatch(updateAllArticles(source_list, page)),
  fetchAllFeeds: () => dispatch(fetchAllFeeds()),
  fetchAllSources: () => dispatch(fetchAllSources())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesPage);
