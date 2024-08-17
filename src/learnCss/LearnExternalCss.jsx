import React from "react";
import "../../global.css";
const LearnExternalCss = () => {
  return (
    <>
      <div
        style={{
          fontWeight: "900",
          color: "red",
          fontFamily: "cursive",
          backgroundColor: "black",
        }}
      >
        LearnExternalCss
      </div>
      <div className="hello">This is a test</div>
    </>
  );
};

export default LearnExternalCss;
