import React, { useState } from "react";

const UseState = () => {
  let [count, setCount] = useState(0);
  return (
    <div>
      <br />
      <input type="text" placeholder={count}></input>
      <br />
      <br />
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
    </div>
  );
};

export default UseState;
