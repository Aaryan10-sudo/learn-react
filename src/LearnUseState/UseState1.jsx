import React, { useState } from "react";
import "../index.css";
const UseState1 = () => {
  //component will render if state variable is changed
  let [count, setCount] = useState(0);
  return (
    <>
      <div className="pa">Count is {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        Increment
      </button>
      <button
        onClick={() => {
          setCount(count - 1);
        }}
      >
        Decrement
      </button>
      <button
        onClick={() => {
          setCount(0);
        }}
      >
        Reset
      </button>
    </>
  );
};

export default UseState1;
