import React, { useState } from "react";

const UseState3 = () => {
  let [show, setShow] = useState(true);
  return (
    <>
      {show === true && <img src="/public/vite.svg" />}

      <button
        onClick={() => {
          {
            setShow(!show);
          }
        }}
      >
        {show === true ? "Nadekha" : "Dekha"}
      </button>
    </>
  );
};

export default UseState3;
