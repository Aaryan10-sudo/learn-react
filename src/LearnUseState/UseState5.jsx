import React, { useState } from "react";

const UseState5 = () => {
  let [show, setShow] = useState("password");
  return (
    <div>
      <input type={show} placeholder="password"></input>
      <button
        onClick={() => {
          {
            show === "text" ? setShow("password") : setShow("text");
          }
        }}
      >
        {show === "password" ? "SHOW" : "HIDE"}
      </button>
    </div>
  );
};

export default UseState5;
