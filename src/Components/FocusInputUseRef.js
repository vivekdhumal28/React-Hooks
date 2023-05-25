import React, { useEffect, useRef } from "react";

const FocusInputUseRef = () => {
  const userRef = useRef(null);

  useEffect(() => {
    // Call useEffect for input Focus
    userRef.current.focus();
  }, []);
  return (
    <>
      <div>
        <h2>useRef Hook</h2>
        <input ref={userRef} type="text" />
      </div>
    </>
  );
};

export default FocusInputUseRef;
