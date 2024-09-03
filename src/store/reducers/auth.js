import { ADD, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS } from '../action-types';

let initialstate = {
  user: null,
  error: null
}
function auth(state = initialstate, action) {
  switch (action.type) {
    case LOGIN_SUCCESS:
      return { ...state, user: action.payload };
    case LOGIN_FAIL:
      return { ...state, error: action.payload };
    case LOGOUT_SUCCESS:
      return {...state, user: null}
    default:
      return state;
  }
}

export default auth;