import React from 'react';
import { connect } from 'react-redux';

import { fetchAllArticles,
  updateAllArticles } from '../../../../actions/news_api_actions';
import { fetchAllFeeds, fetchAllSources } from '../../../../actions/feed_actions';
import { openModal } from '../../../../actions/modal_actions';
import ArticlesPage from '../articles_page';

const feedNameTosourceList = (feeds, feedName, user) => {
  const feed = Object.values(feeds).find((feed) =>
    feed.feed_name === feedName);

  if (feed === undefined) { return user.source_list }

  return feed.source_list;
}

const mapStateToProps = (state, ownProps) => ({
  contentType: "FeedArticles",
  title: ownProps.match.params.feedName,
  info: "",
  saved: false,
  articles: state.entities.articles,
  sourceList: feedNameTosourceList(state.entities.feeds,
    ownProps.match.params.feedName, state.entities.user),
  searchQuery: null
});

const mapDispatchToProps = (dispatch) => ({
  fetchRelevantArticles: (source_list, searchQuery, page) =>
    dispatch(fetchAllArticles(source_list, page)),
  updateRelevantArticles: (source_list, searchQuery, page) =>
    dispatch(updateAllArticles(source_list, page)),
  fetchAllFeeds: () => dispatch(fetchAllFeeds()),
  fetchAllSources: () => dispatch(fetchAllSources())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(ArticlesPage);
