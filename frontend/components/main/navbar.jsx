import React from 'react';
import { connect } from 'react-redux';
import { Link } from 'react-router-dom';

import { openModal } from '../../actions/modal_actions';
import { logout } from '../../actions/session_actions';

import SearchBar from './search_bar';

class NavBar extends React.Component {
  constructor(props) {
    super(props)
  }

  render() {
    let userButton;
    if (this.props.loggedIn) {
      userButton = (
      <button id="log-button" onClick={() => this.props.logout()}>
        LOGOUT
      </button>)
    } else {
      userButton = (
      <button id="log-button" onClick={() => this.props.openModal('login')}>
        LOGIN
      </button>)
    };

    return (
      <nav id="navbar">
        <div id="masthead">
          <Link to="/my">
            <img src={window.logo} alt="Logo"/>
          </Link>
          <span id="masthead-title" className="title">Feedlet</span>
          <span id="acknowledgement">Powered by NewsAPI</span>
        </div>
        <div id="user-bar">
          { (this.props.loggedIn) ? <SearchBar /> : null }
          {userButton}
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
