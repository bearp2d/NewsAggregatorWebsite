import * as FeedApiUtil from '../util/feed_api_util';

export const RECEIVE_NEW_FEED = "RECEIVE_NEW_FEED";
export const RECEIVE_ALL_FEEDS = "RECEIVE_ALL_FEEDS";
export const RECEIVE_FORM_ERRORS = "RECEIVE_FORM_ERRORS";

export const receiveAllFeeds = (feeds) => ({
  type: RECEIVE_ALL_FEEDS,
  feeds: feeds
});

export const receiveNewFeed = (feed) => ({
  type: RECEIVE_NEW_FEED,
  feed: feed
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
