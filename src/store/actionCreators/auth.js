import { ADD_USER, LOGIN, LOGIN_FAIL, LOGIN_SUCCESS, LOGOUT_SUCCESS, SET_USERLIST } from "../action-types"
import {push } from 'redux-first-history';

const actionCreators = {
  login(user) {
    return (dispatch, getState, request) => {
      return request.post('/api/login', user).then(response => {
        const { success, data, error } = response.data;
        if (success) {
          dispatch({
            type: LOGIN_SUCCESS,
            payload: data
          });
          dispatch(push('/profile'))
        } else {
          dispatch({
            type: LOGIN_FAIL,
            payload: error
          })
        }
      })
    }
  },
  logout() {
    return (dispatch, getState, request) => {
      return request.get('/api/logout').then(response => {
        const { success } = response.data;
        if (success) {
          dispatch({ type: LOGOUT_SUCCESS });
          dispatch(push('/login'));
        }
      })
    }
  },
  validate() {
    return (dispatch, getState, request) => {
      return request.get('/api/validate').then(response => {
        const { success, data, error } = response.data;
        if (success) {
          dispatch({ type: LOGIN_SUCCESS, payload: data }); 
        } else {
          dispatch({
            type: LOGIN_FAIL,
            payload: error
          })
        }
      })
    }
  },
}

export default actionCreators;