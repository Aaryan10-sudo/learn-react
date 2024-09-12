import React, { useState } from "react";
import Child from "./Child";

const Parent = () => {
  //   let [name, setName] = useState("Ram");

  return (
    <div>
      Parent
      <Child />
    </div>
  );
};

export default Parent;
