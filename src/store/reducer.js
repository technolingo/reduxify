import * as actionTypes from './actions';

const initialState = {
  counter: 0,
  results: []
};

const reducer = (state = initialState, action) => {
  switch (action.type) {
    case actionTypes.INCREMENT:
      return {
        ...state,
        counter: state.counter + 1
      };
    case actionTypes.DECREMENT:
      return {
        ...state,
        counter: state.counter - 1
      };
    case actionTypes.ADDITION:
      return {
        ...state,
        counter: state.counter + action.addend
      };
    case actionTypes.SUBTRACTION:
      return {
        ...state,
        counter: state.counter - action.subtrahend
      };
    case actionTypes.STORE_RESULT:
      return {
        ...state,
        // results: [...state.results, state.counter]
        results: state.results.concat({id: new Date(), value: state.counter})
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
