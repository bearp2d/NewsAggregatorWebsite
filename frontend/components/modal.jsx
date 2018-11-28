import React from 'react';
import { closeModal } from '../actions/modal_actions';
import { connect } from 'react-redux';

import LoginFormContainer from './landing/login_form_container';
import SignupFormContainer from './landing/signup_form_container';

import NewFeedForm from './main/sidebar/new_feed_form';
import DeleteFeedForm from './main/sidebar/delete_feed_form';
import ArticlePopupPage from './main/content/article_popup_page';

function Modal({modal, optional_props, closeModal}) {
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

    case 'delete-feed-form':
      component = <DeleteFeedForm />;
      sidepanel = true;
      break;

    case 'article-popup-page':
      component = <ArticlePopupPage article={optional_props.article}
                    elapsedTime={optional_props.elapsedTime}
                    index={optional_props.index}
                    createNewFavorite={optional_props.createNewFavorite}
                    saved={optional_props.saved}/>;
      sidepanel = true;
      break;

    default:
      return null;
  }
  return (
    <div className="modal-background" onClick={closeModal}>
      <div className={sidepanel ? "modal-child-sidepanel":"modal-child-center"}
        onClick={e => e.stopPropagation()}>
        {sidepanel ?
          <div id="close-button" onClick={closeModal}>
            <img src={window.close_icon} alt="Close-icon"/>
          </div>
          :""}
        { component }
      </div>
    </div>
  );
}

const mapStateToProps = state => {
  return {
    modal: state.ui.modal,
    optional_props: state.ui.optional_props
  };
};

const mapDispatchToProps = dispatch => {
  return {
    closeModal: () => dispatch(closeModal())
  };
};

export default connect(mapStateToProps, mapDispatchToProps)(Modal);
