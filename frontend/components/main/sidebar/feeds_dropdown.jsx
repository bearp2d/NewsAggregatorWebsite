import React from 'react';
import { connect } from 'react-redux';

// Old-syntax but I don't know how to do it otherwise
const enhanceWithClickOutside = require('react-click-outside');

import { createNewFollow } from '../../../actions/feed_actions';

class FeedsDropdown extends React.Component {
  constructor(props) {
    super(props);
    // this.state = {open: this.props.dropdownOpen}
  }

  // Paired together to hide dropdown when clicked outside of
  // handleClickOutside() {
  //   this.setState({open: false});
  // }
  //
  // componentDidUpdate(oldProps) {
  //   if (this.props.selectedSource.id !== oldProps.selectedSource.id) {
  //     this.setState({open: true})
  //   }
  // }

  //

  renderFeedLis() {
    return Object.values(this.props.feeds).map((feed, idx) => (
      <li key={idx}>{feed.feed_name}</li>
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
  createNewFollow: (feed_id, source_id) =>
    dispatch(createNewFollow(feed_id, sourc_id))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(FeedsDropdown);
