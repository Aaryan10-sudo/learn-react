import React from "react";
import GreatGrandChild from "./GreatGrandChild";

const GrandChild = (props) => {
  console.log(props.name);
  return (
    <div>
      <GreatGrandChild />
    </div>
  );
};

export default GrandChild;
