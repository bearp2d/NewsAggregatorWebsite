import React from 'react';
import { connect } from 'react-redux';
import { Route, Redirect, Switch, Link, HashRouter } from 'react-router-dom';

import { login } from '../../actions/session_actions';
import SessionForm from './session_form';

const mapStateToProps = (state) => ({
  formType: 'login',
  errors: state.errors.session,
  navLink: <Link to="/signup">sign up instead</Link>,
});

const mapDispatchToProps = (dispatch) => ({
  processForm: (user) => dispatch(login(user))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(SessionForm);
