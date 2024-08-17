import React, { useState } from "react";

const UseState4 = () => {
  let [type, setType] = useState("password");

  return (
    <div>
      <label htmlFor="password">Password</label>
      <br /> <input type={type}></input>
      <br />
      <button
        onClick={() => {
          setType("text");
        }}
      >
        SHOW
      </button>
      <button
        onClick={() => {
          setType("password");
        }}
      >
        HIDE
      </button>
    </div>
  );
};

export default UseState4;
