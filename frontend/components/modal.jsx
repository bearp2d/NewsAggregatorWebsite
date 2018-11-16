import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';

import LoginFormContainer from './landing/login_form_container';
import SignupFormContainer from './landing/signup_form_container';

import NewFeedForm from './main/sidebar/new_feed_form';

function Modal({modal, closeModal}) {
  if (!modal) {
    return null;
  }
  let component;

  //in order to change the classname and restyle the modal
  let sidepanel = false;
  //
  switch (modal) {
    case 'login':
      component = <LoginFormContainer />;
      break;
    case 'signup':
      component = <SignupFormContainer />;
      break;
    case 'new-feed-form':
      component = <NewFeedForm />;
      sidepanel = true;
      break;
    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className={sidepanel ? "modal-child-sidepanel":"modal-child-center"}
        onClick={e => e.stopPropagation()}>
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
