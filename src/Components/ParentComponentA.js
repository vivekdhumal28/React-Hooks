import { useState, useCallback } from "react";
import Title from "./Title";
import Count from "./Count";
import Button from "./Button";

function ParentComponentA() {
  const [age, setAge] = useState(25);
  const [salary, setSalary] = useState(50000);

  const handleAge = useCallback(() => {
    setAge(age + 1);
  }, [age]);
  const handleSalary = useCallback(() => {
    setSalary(salary + 1000);
  }, [salary]);

  return (
    <>
      <div className="App">
        <Title />
        <Count text="Age" count={age} />
        <Button handleclick={handleAge}>Increment Age</Button>
        <Count text="salary" count={salary} />
        <Button handleclick={handleSalary}>Increment Salary</Button>
      </div>
    </>
  );
}

export default ParentComponentA;
