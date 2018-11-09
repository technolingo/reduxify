import * as actionTypes from '../actions';

const initialState = {
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        // results: [...state.results, state.counter]
        results: state.results.concat({id: new Date(), value: action.result})
      };
    case actionTypes.DELETE_RESULT:
      // const index = 2;
      // const updatedArray = [...state.results];
      // updatedArray.splice(index, 1);
      const updatedArray = state.results.filter(elem => (
        elem.id !== action.resultID
      ));
      return {
        ...state,
        results: updatedArray
      };
    default:
      return state;
  }
};

export default reducer;
