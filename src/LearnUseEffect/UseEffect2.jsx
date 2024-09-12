import React, { useEffect } from "react";

const UseEffect2 = () => {
  //Use effect runs in every render
  useEffect(() => {});

  //We can have multiple useEffect , if you miss an array (dependencies)=>[], useEffect will run in every render
  //useEffect will runs in first render only
  useEffect(() => {}, []);

  //It will run in first render from the second render it will only run when the count state value is changed
  useEffect(() => {}, [example]);

  // dependency array [] ma bhaira ko variable matra rakhne useEffect vitra ko ta affei run vaihalcha , example :- a rakhna pareyna
  useEffect(() => {
    let a = 10;
    console.log(a);
  }, [count]);
  return <div>UseEffect2</div>;
};

export default UseEffect2;
