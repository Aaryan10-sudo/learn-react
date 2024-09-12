import React, { useState } from "react";

const UseState2 = () => {
  let [show, setShow] = useState(true);
  return (
    <>
      {show === true && <img src="/public/vite.svg" />}
      <button
        onClick={() => {
          setShow(true);
        }}
      >
        SHOW
      </button>
      <button
        onClick={() => {
          setShow(false);
        }}
      >
        HIDE
      </button>
    </>
  );
};

export default UseState2;
