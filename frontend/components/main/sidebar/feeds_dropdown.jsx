import React from 'react';
import { connect } from 'react-redux';

import { createNewFollow } from '../../../actions/feed_actions';

class FeedsDropdown extends React.Component {
  constructor(props) {
    super(props);
  }

  renderFeedLis() {
    return Object.values(this.props.feeds).map((feed, idx) => (
      <li key={idx} onClick={
          this.props.createNewFollow(feed.id, this.props.selectedSource.id)}>
        <div id="stupid-header">
          <small className="img-box">
            <img src={window.rss_icon} alt="rss_icon"/>
          </small>
          {feed.feed_name}
        </div>
        {(feed.source_ids.includes(this.props.selectedSource.id) ?
          (<div id="added-button">
            <small className="img-box">
              <img src={window.checkmark_icon} alt="checkmark_icon"/>
            </small>
            <div>ADDED</div>
          </div>) :
          (<div id="add-button">
            <small className="img-box">
              <img src={window.green_plus_icon} alt="green_plus_icon"/>
            </small>
            <div>ADD</div>
          </div>)
        )}
      </li>
    ));
  }

  render() {
    return (this.props.dropdownOpen ? (
      <ul id="feeds-dropdown">
        {this.renderFeedLis()}
      </ul>
    ): null)
  }
}

const mapStateToProps = (state) => ({
  feeds: state.entities.feeds
});

const mapDispatchToProps = (dispatch) => ({
  createNewFollow: (feed_id, source_id) => (e) =>
    dispatch(createNewFollow(feed_id, source_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedsDropdown);
