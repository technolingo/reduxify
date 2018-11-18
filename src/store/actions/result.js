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
  // so that redux-thunk will excute the async code and wait for the result
  // by blocking the dispatched action and dispatching the action again later
  return (dispatch, getState) => {
    // put async code here
    setTimeout(() => {
      // this anon func also takes getState as an optional param
      // BEST PRACTICE: don't over use getState here, pass everything
      // you need from the component
      const prevResult = getState().ctr.counter;
      console.log('Before Transformation: ' + prevResult);
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
