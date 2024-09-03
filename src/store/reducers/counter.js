import { ADD } from '../action-types';

let initialstate = {  
  number: 0
}
function counter(state = initialstate, action) {
  switch (action.type) {
    case ADD:
      return { number: state.number + 1 };
    default:
      return state;
  }
}

export default counter;