import React, { useEffect, useState } from "react";

const UseEffect1 = () => {
  let [count, setCount] = useState(0);
  let [count1, setCount1] = useState(10);
  useEffect(() => {
    //Cleanup function is the function which is return by useEffect
    //Cleanup function does not execute on first render (component mount), but from the second render if
    //use useEffect executes , cleanup function runs first  then other code runs

    //mount => show
    //unmount => hide

    console.log("This is use effect");
    return () => {
      console.log("This is cleanup function");
    };
  }, [count]);
  return (
    <>
      <div>Count is {count}</div>
      <button
        onClick={() => {
          setCount(count + 1);
        }}
      >
        CLICK ME
      </button>
      <div>Count1 is {count1}</div>
      <button
        onClick={() => {
          setCount1(count1 + 10);
        }}
      >
        ADD BY 10
      </button>
    </>
  );
};

export default UseEffect1;
