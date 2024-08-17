import React from "react";
import { Navigate, useNavigate } from "react-router-dom";

const ErrorPage = () => {
  return <Navigate to={"/"}></Navigate>;
};

export default ErrorPage;
