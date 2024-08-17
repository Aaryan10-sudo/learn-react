import React from "react";

localStorage.setItem("name", "Ram");
localStorage.setItem("age", "20");

const SetLocalStorage = () => {
  //Localhost storage is the memory storage for a particular browser.
  //All data in local storage are string.
  //If browser is closed , LocalStorage data will persist in local.
  return <div>SetLocalStorage</div>;
};

export default SetLocalStorage;
