import React, { useState } from "react";

const UseState4 = () => {
  let [show, setShow] = useState("password");
  return (
    <div>
      <input type={show} placeholder="Password"></input>
      <br />
      <button
        onClick={() => {
          setShow("text");
        }}
      >
        DEKHA
      </button>
      <button
        onClick={() => {
          setShow("password");
        }}
      >
        LUKA
      </button>
    </div>
  );
};

export default UseState4;
