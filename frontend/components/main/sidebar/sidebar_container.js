import React from 'react';
import { connect } from 'react-redux';

import { fetchAllFeeds } from '../../../actions/feed_actions';
import { openModal } from '../../../actions/modal_actions';

import SideBar from './sidebar';

const mapStateToProps = (state) => ({
  feeds: state.entities.feeds,
  sources: state.entities.sources
});

const mapDispatchToProps = (dispatch) => ({
  fetchAllFeeds: () => dispatch(fetchAllFeeds()),
  openModal: (modal) => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
