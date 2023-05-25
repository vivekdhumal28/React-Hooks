import React, { useState, useMemo } from "react";

const Memoize = () => {
  const [counterOne, setCounterOne] = useState(0);
  const [counterTwo, setCounterTwo] = useState(0);

  const incrCounterOne = () => {
    setCounterOne(counterOne + 1);
  };
  const incrCounterTwo = () => {
    setCounterTwo(counterTwo + 1);
  };

  const isEven = useMemo(() => {
    let i = 0;
    while (i < 2000000000) i++;
    return counterOne % 2 === 0;
  }, [counterOne]);

  return (
    <>
      <h2>useMemo Hook</h2>
      <div>
        <button onClick={incrCounterOne}>Counter one - {counterOne}</button>
        {isEven ? "Even" : "Odd"}
      </div>
      <div>
        <button onClick={incrCounterTwo}>Counter two - {counterTwo}</button>
      </div>
    </>
  );
};

export default Memoize;
