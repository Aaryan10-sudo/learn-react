import React, { useContext } from "react";
import { Context } from "../App";

const GreatGrandChild = () => {
  let value = useContext(Context);
  console.log(value.name);
  return (
    <div>
      {value.name}
      <button
        onClick={() => {
          value.setName("Rameshwor");
        }}
      >
        Change Name
      </button>
    </div>
  );
};

export default GreatGrandChild;
