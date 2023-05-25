import React, { useState } from "react";

const Form = (props) => {
  const [name, setName] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    props.getName(name);
  };
  return (
    <>
      <form onSubmit={handleSubmit}>
        <input
          type="input"
          placeholder="enter name"
          value={name}
          onChange={(e) => {
            setName(e.target.value);
          }}
        />
        <button onSubmit={handleSubmit}>Submit</button>
      </form>
    </>
  );
};

export default Form;
