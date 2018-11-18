import * as actionTypes from './actionTypes';

// an action creator
export const increment = () => {
  return {
    type: actionTypes.INCREMENT
  };
};

export const decrement = () => {
  return {
    type: actionTypes.DECREMENT
  };
};

export const add = n => {
  return {
    type: actionTypes.ADDITION,
    addend: n
  };
};

export const subtract = n => {
  return {
    type: actionTypes.SUBTRACTION,
    subtrahend: n
  };
};
