import React from "react";

const Button = ({ handleclick, children }) => {
  console.log(`rendering ${children}`);
  return (
    <>
      <button onClick={handleclick}>{children}</button>
    </>
  );
};

export default React.memo(Button);
