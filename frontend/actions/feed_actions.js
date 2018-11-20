import * as FeedApiUtil from '../util/feed_api_util';

export const RECEIVE_NEW_FEED = "RECEIVE_NEW_FEED";
export const RECEIVE_ALL_FEEDS = "RECEIVE_ALL_FEEDS";
export const RECEIVE_ALL_SOURCES = "RECEIVE_ALL_SOURCES";
export const UPDATE_SOURCE_LIST = "UPDATE_SOURCE_LIST";
export const RECEIVE_FORM_ERRORS = "RECEIVE_FORM_ERRORS";

export const receiveAllFeeds = (feeds) => ({
  type: RECEIVE_ALL_FEEDS,
  feeds: feeds
});

export const receiveNewFeed = (feed) => ({
  type: RECEIVE_NEW_FEED,
  feed: feed
});

export const receiveAllSources = (sources) => ({
  type: RECEIVE_ALL_SOURCES,
  sources: sources
});

export const updateSourceList = (res) => ({
  type: UPDATE_SOURCE_LIST,
  source_list: res.source_list
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_FORM_ERRORS,
  errors: errors
});

export const fetchAllFeeds = () => (dispatch) => (
  FeedApiUtil.fetchAllFeeds().then(
    feeds => dispatch(receiveAllFeeds(feeds))
  )
);

export const createNewFeed = (feed_name) => (dispatch) => (
  FeedApiUtil.createNewFeed(feed_name).then(
    feed => dispatch(receiveNewFeed(feed)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const fetchAllSources = () => (dispatch) => (
  FeedApiUtil.fetchAllSources().then(
    sources => dispatch(receiveAllSources(sources))
  )
);

export const createNewFollow = (feed_id, source_id) => (dispatch) => (
  FeedApiUtil.createNewFollow(feed_id, source_id).then(
    (res) => dispatch(updateSourceList(res))
  )
);
