import React from 'react';
import { connect } from 'react-redux';

import { closeModal } from '../../../actions/modal_actions';
import { deleteFeed } from '../../../actions/feed_actions';

class DeleteFeedForm extends React.Component {
  constructor(props) {
    super(props);
  }

  renderFeedLis() {
    return Object.values(this.props.feeds).map((feed, idx) => (
      <li key={idx}>
        <div id="stupid-header">
          <small className="img-box">
            <img src={window.rss_icon} alt="rss_icon"/>
          </small>
          {feed.feed_name}
        </div>
        <div id="remove-button" onClick={() =>
            this.props.deleteFeed(feed.id)}>
          <small className="img-box">
            <img src={window.close_icon_white} alt="close_icon_white"/>
          </small>
          <div>REMOVE</div>
        </div>
      </li>
    ));
  }

  render() {
    return (
      <div id="delete-feed-form">
        <header>
          <h1 className="title">Delete Existing Feed</h1>
          <span>Select from a list of all of your feeds</span>
        </header>

        <ul id="delete-feeds-ul">
          {this.renderFeedLis()}
        </ul>
      </div>)
  }
};

const mapStateToProps = (state) => ({
  feeds: state.entities.feeds
});

const mapDispatchToProps = (dispatch) => ({
  deleteFeed: (feedId) => dispatch(deleteFeed(feedId))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(DeleteFeedForm);
