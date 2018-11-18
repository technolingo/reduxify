import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utilities';

const initialState = {
  counter: 0
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return updateObject(state, {counter: state.counter + 1});
    case actionTypes.DECREMENT:
      return updateObject(state, {counter: state.counter - 1});
    case actionTypes.ADDITION:
      return updateObject(state, {counter: state.counter + action.addend});
    case actionTypes.SUBTRACTION:
      return updateObject(state, {counter: state.counter - action.subtrahend});
    default:
      return state;
  }
};

export default reducer;
