import React from 'react';
import { connect } from 'react-redux';

import { fetchAllArticles,
  updateAllArticles } from '../../../../actions/news_api_actions';
import { fetchAllFeeds, fetchAllSources } from '../../../../actions/feed_actions';
import { openModal } from '../../../../actions/modal_actions';
import ArticlesPage from '../articles_page';

const sourceIdtoInfo = (sources, sourceId) => {
  const source = Object.values(sources).filter(
    source => source.source_id === sourceId);

  return source[0].source_description;
}

const mapStateToProps = (state, ownProps) => ({
  contentType: "SourceArticles",
  title: ownProps.match.params.sourceId,
  info: sourceIdtoInfo(state.entities.sources, ownProps.match.params.sourceId),
  saved: false,
  articles: state.entities.articles,
  sourceList: [ownProps.match.params.sourceId],
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
