import React from "react";
import { useParams } from "react-router-dom";

const LearnDynamicRoute = () => {
  let test = useParams();
  let a = "aaryan";
  return (
    <>
      <div>{test.id}</div>
      <div>{test.id1}</div>
    </>
  );
};

export default LearnDynamicRoute;
