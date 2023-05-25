import React, { useState } from "react";

const HooksCounter4 = () => {
  const [name, setName] = useState([]);

  const addItem = () => {
    setName([
      ...name,
      {
        id: name.length,
        value: Math.floor(Math.random() * 10) + 1,
      },
    ]);
  };
  return (
    <>
      <div>
        <button onClick={addItem}>Add Item</button>
        {name.map((item) => (
          <p key={item.id}>
            {item.id} , {item.value}
          </p>
        ))}
      </div>
    </>
  );
};

export default HooksCounter4;
