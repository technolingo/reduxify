export const INCREMENT = 'INCREMENT';
export const DECREMENT = 'DECREMENT';
export const ADDITION = 'ADDITION';
export const SUBTRACTION = 'SUBTRACTION';
export const STORE_RESULT = 'STORE_RESULT';
export const DELETE_RESULT = 'DELETE_RESULT';

// an action creator
export const increment = () => {
  return {
    type: INCREMENT
  };
};

export const decrement = () => {
  return {
    type: DECREMENT
  };
};

export const add = (n) => {
  return {
    type: ADDITION,
    addend: n
  };
};

export const subtract = (n) => {
  return {
    type: SUBTRACTION,
    subtrahend: n
  };
};

export const storeResult = (r) => {
  return {
    type: STORE_RESULT,
    result: r
  };
};

export const deleteResult = (id) => {
  return {
    type: DELETE_RESULT,
    resultID: id
  };
};
