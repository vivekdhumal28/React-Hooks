import React, { useState } from "react";

const HooksCounterObj = () => {
  const [name, setName] = useState({ firstName: "", lastName: "" });
  return (
    <>
      <form>
        <input
          type="text"
          value={name.firstName}
          onChange={(e) => setName({ ...name, firstName: e.target.value })}
        />
        <input
          type="input"
          value={name.lastName}
          onChange={(e) => setName({ ...name, lastName: e.target.value })}
        />
        <h2>The firstname is - {name.firstName}</h2>
        <h2>The lastName is - {name.lastName}</h2>
        <h2>{JSON.stringify(name)}</h2>
      </form>
    </>
  );
};

export default HooksCounterObj;
