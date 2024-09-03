import { ADD, ADD_USER, SET_USERLIST } from '../action-types';

let initialstate = {
  list: []
}
function user(state = initialstate, action) {
  switch (action.type) {
    case SET_USERLIST:
      return { list: action.payload }; 
    case ADD_USER:
      return {list: [...state.list, action.payload]}
    default:
      return state;
  }
}

export default user;