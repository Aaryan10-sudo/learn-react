import React from "react";
import { useSearchParams } from "react-router-dom";

const GetQueryParams = () => {
  let [test] = useSearchParams();
  return <div>{test.get("age")}</div>;
};

export default GetQueryParams;
