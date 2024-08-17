import React from "react";
import { Route, Routes } from "react-router-dom";
import Home from "../Home";
import Contact from "../Contact";
import About from "../About";
import LearnDynamicRoute from "../LearnDynamicRoute/LearnDynamicRoute";
import GetQueryParams from "../LearnDynamicRoute/GetQueryParams";
import ErrorPage from "../ErrorPage";

const Routing = () => {
  return (
    <>
      <Routes>
        <Route
          path="/"
          element={<Home name={"Aaryan"} number={"9761637657"} />}
        ></Route>
        <Route path="/contact" element={<Contact />}></Route>
        <Route path="/about" element={<div></div>}></Route>
        <Route path="*" element={<div>Error Pagee</div>}></Route>
        <Route
          path="/user/:id/create/:id1"
          element={<LearnDynamicRoute />}
        ></Route>
        <Route path="/aaryan" element={<GetQueryParams />}></Route>
      </Routes>
    </>
  );
};

export default Routing;
