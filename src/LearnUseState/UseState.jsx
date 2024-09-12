import React, { useState } from "react";

const UseState = () => {
  let [sum, setSum] = useState(0);
  return (
    <>
      <div>count is {sum}</div>
      <button
        onClick={() => {
          setSum(sum + 1);
        }}
      >
        +
      </button>
      <button
        onClick={() => {
          setSum(sum - 1);
        }}
      >
        -
      </button>
    </>
  );
};

export default UseState;
