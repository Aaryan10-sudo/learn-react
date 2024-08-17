import React, { useState } from "react";

const UseState3 = () => {
  let [show, setShow] = useState(true);
  return (
    <>
      {show === true && <img src="./public/vite.svg" />}
      {/* <button
        onClick={() => {
          if (show === true) {
            setShow(false);
          } else {
            setShow(true);
          }
        }}
      >
        {show === true ? "HIDE" : "SHOW"}
      </button> */}
      <button
        onClick={() => {
          setShow(!show);
        }}
      >
        {show === true ? "HIDE" : "SHOW"}
      </button>
    </>
  );
};

export default UseState3;
