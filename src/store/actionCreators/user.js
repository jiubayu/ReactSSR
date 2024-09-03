import { ADD_USER, SET_USERLIST } from "../action-types"

const actionCreators = {
  getUserList() {
    return function (dispatch, getState, request) {
      // console.log(dispatch, getState, 'getState--')
      // console.log(request, 'request------')
      return request.get('/api/users').then((response) => {
        const { code, data } = response.data;
        dispatch({
          type: SET_USERLIST,
          payload: data
        })
      })
    }
  },
  addUser(payload) {
    return {
      type: ADD_USER,
      payload,
    }
  }
}

export default actionCreators;