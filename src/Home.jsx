import React from "react";

const Home = (props) => {
  return (
    <div>
      {props.name} is my name. My number is {props.number}
    </div>
  );
};

export default Home;
