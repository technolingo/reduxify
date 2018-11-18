import * as actionTypes from './actionTypes';

// create a synchronous action creator which will be dispatched by
// an asychronous action creator below, to avoid infinite recursion
// only the action created by this function will reach the reducer
export const storeResultSync = r => {
  // data transformation logic could either be doen here or in the reducer
  // r = r * 2; // BEST PRACTICE: put this in the reducer
  return {
    type: actionTypes.STORE_RESULT,
    result: r
  };
};

// a utility function used together with redux-thunk for running async code
export const storeResultAsync = r => {
  // return an anonymous function that receives dispatch as a param.
  // this anonymous function will then be excuted by the redux-thunk middleware
  // so that redux-thunk will enforce the timeout by blocking
  // the dispatched action and dispatching the action again later
  return dispatch => {
    // put async code here
    setTimeout(() => {
      dispatch(storeResultSync(r));
    }, 2000);
  };
};

export const deleteResult = id => {
  return {
    type: actionTypes.DELETE_RESULT,
    resultID: id
  };
};
