import * as actionTypes from '../actions/actionTypes';
import { updateObject } from '../utilities';

const initialState = {
  results: []
};

const storeResult = (state, action) => {
  return updateObject(state, {
    // results: [...state.results, state.counter]
    results: state.results.concat({id: new Date(), value: action.result})
  });
};

const deleteResult = (state, action) => {
  // const index = 2;
  // const updatedArray = [...state.results];
  // updatedArray.splice(index, 1);
  const updatedArray = state.results.filter(elem => (
    elem.id !== action.resultID
  ));
  return updateObject(state, {results: updatedArray});
};

// a much leaner reducer can make it easy to check switch cases
const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT: return storeResult(state, action);
    case actionTypes.DELETE_RESULT: return deleteResult(state, action);
    default: return state;
  }
};

export default reducer;
