import * as SessionApiUtil from '../util/session_api_util';

export const RECEIVE_CURRENT_USER = "RECEIVE_CURRENT_USER";
export const LOGOUT_CURRENT_USER = "LOGOUT_CURRENT_USER";
export const RECEIVE_SESSION_ERRORS = "RECEIVE_SESSION_ERRORS";

export const receiveCurrentUser = (user) => ({
  type: RECEIVE_CURRENT_USER,
  currentUser: user,
});

export const logoutCurrentUser = () => ({
  type: LOGOUT_CURRENT_USER
});

export const receiveErrors = (errors) => ({
  type: RECEIVE_SESSION_ERRORS,
  errors: errors
});

export const signup = (user) => (dispatch) => (
  SessionApiUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const login = (user) => (dispatch) => (
  SessionApiUtil.login(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors))
  )
);

export const logout = () => (dispatch) => (
  SessionApiUtil.logout().then(
    user => dispatch(logoutCurrentUser())
  )
);

export const createDemoUser = () => (dispatch) => {
  const user = {
    username:  Math.random().toString(36).substring(2, 15),
    password: Math.random().toString(36).substring(2, 15),
    demo: true
  }
  SessionApiUtil.signup(user).then(
    user => dispatch(receiveCurrentUser(user)),
    errors => dispatch(receiveErrors(errors))
  );
};
