import React from 'react';
import { connect } from 'react-redux';

import { openModal } from '../../actions/modal_actions';
import LandingPage from './landing_page';

const mapStateToProps = (state) => ({

});

const mapDispatchToProps = (dispatch) => ({
    openModal: modal => dispatch(openModal(modal))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(LandingPage);
