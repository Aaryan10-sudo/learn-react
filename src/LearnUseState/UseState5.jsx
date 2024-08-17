import React, { useState } from "react";

const UseState5 = () => {
  let [type, setType] = useState("password");

  return (
    <div>
      <label htmlFor="password">Password</label>
      <br /> <input type={type}></input>
      <button
        onClick={() => {
          type === "password" ? setType("text") : setType("password");
        }}
      >
        {type === "password" ? "SHOW" : "HIDE"}
      </button>
    </div>
  );
};

export default UseState5;
