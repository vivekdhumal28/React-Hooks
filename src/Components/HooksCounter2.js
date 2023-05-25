import React, { useState } from "react";

const HooksCounter2 = () => {
  const initialValue = 0;
  const [count, setCount] = useState(initialValue);

  const Incrementcounter = () => {
    for (let i = 0; i < 5; i++) {
      setCount((prevCount) => prevCount + 1);
    }
  };
  return (
    <>
      <h2>{count}</h2>
      <button onClick={() => setCount(initialValue)}>Reset</button>
      <button onClick={() => setCount((prevCount) => prevCount + 1)}>
        Increment
      </button>
      <button onClick={() => setCount((prevCount) => prevCount - 1)}>
        Decrement
      </button>
      <button onClick={Incrementcounter}>increment by 5</button>
    </>
  );
};

export default HooksCounter2;
