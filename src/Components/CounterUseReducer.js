import React, { useReducer } from "react";

const initialState = 0;
const reducers = (state, action) => {
  // eslint-disable-next-line default-case
  switch (action) {
    case "increment":
      return state + 1;
    case "decrement":
      return state - 1;
    case "reset":
      return initialState;
    default:
      return state;
  }
};

const CounterUseReducer = () => {
  const [count, dispatch] = useReducer(reducers, initialState);
  return (
    <>
      <div>Count - {count}</div>
      <div>
        <button
          onClick={() => {
            dispatch("increment");
          }}
        >
          Increment
        </button>
        <button
          onClick={() => {
            dispatch("decrement");
          }}
        >
          Decrement
        </button>
        <button
          onClick={() => {
            dispatch("reset");
          }}
        >
          Reset
        </button>
      </div>
    </>
  );
};

export default CounterUseReducer;
