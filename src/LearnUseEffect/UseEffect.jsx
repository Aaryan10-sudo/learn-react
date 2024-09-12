import React, { useEffect } from "react";

const UseEffect = () => {
  //useEffect function is asynchronous function which will execute once all the code gets executed. It means
  //it will executed once the DOM is printed on the browser.
  useEffect(() => {
    console.log("HELLO");
  });
  console.log("WORLD");
  return (
    <>
      <div>Hello</div>
    </>
  );
};

export default UseEffect;
