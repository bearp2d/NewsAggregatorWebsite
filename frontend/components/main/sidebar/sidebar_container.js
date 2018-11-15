import React from 'react';
import { connect } from 'react-redux';

import SideBar from './sidebar';

const mapStateToProps = (state) => ({
  feeds: state.entities.feeds,
  sources: state.entities.sources
});

const mapDispatchToProps = (dispatch) => ({

});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SideBar);
