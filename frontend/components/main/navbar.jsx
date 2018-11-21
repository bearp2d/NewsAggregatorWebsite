import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let userButton;
    if (this.props.loggedIn) {
      userButton = (
      <button id="logout-button" onClick={() => this.props.logout()}>
        LOGOUT
      </button>)
    } else {
      userButton = (
      <button id="login-button" onClick={() => this.props.openModal('login')}>
        LOGIN
      </button>)
    };

    return (
      <nav id="navbar">
        <img src={window.logo} alt="Logo"/>
        <div>
          {userButton}
          <Link to="/trollolol">Bonus Feature</Link>
        </div>
      </nav>
    )
  }
}

const mapStateToProps = (state) => ({
  loggedIn: Boolean(state.session.id)
});

const mapDispatchToProps = (dispatch) => ({
  openModal: modal => dispatch(openModal(modal)),
  logout: () => dispatch(logout())
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(NavBar);
