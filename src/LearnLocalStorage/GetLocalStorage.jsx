import React from "react";

let name = localStorage.getItem("name");
let age = localStorage.getItem("age");

const GetLocalStorage = () => {
  return (
    <div>
      My name is {name} and my age is {age}
    </div>
  );
};

export default GetLocalStorage;
