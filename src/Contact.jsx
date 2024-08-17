import React from "react";
import { useNavigate } from "react-router-dom";

const Contact = () => {
  let navigate = useNavigate();
  return (
    <>
      <div>CONTACT</div>
      <br />
      <button
        onClick={() => {
          navigate("/about", { replace: true });
        }}
      >
        Click Me
      </button>
    </>
  );
};

export default Contact;
