import React, { useRef, useState } from "react";

const UseRefDeepII = () => {
  const [name, setName] = useState("vicky");

  const refElem = useRef();
  function reset() {
    setName("");
    refElem.current.focus();
  }

  const handleInput = () => {
    refElem.current.style.backgroundColor = "yellow";
  };
  return (
    <section>
      <div>UseRef</div>
      <input
        ref={refElem}
        type="text"
        value={name}
        onChange={(e) => {
          setName(e.target.value);
        }}
      />
      <button onClick={reset}>Reset</button>
      <button onClick={handleInput}>HandleInput</button>
    </section>
  );
};

export default UseRefDeepII;
