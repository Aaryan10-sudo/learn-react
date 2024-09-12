import React from "react";
import GrandChild from "./GrandChild";

const Child = (props) => {
  console.log(props.name);
  return (
    <div>
      Child
      <GrandChild />
    </div>
  );
};

export default Child;
