import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";
import ErrorPage from "../ErrorPage";

const NestedROuting1 = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<div>Home Page</div>}></Route>
          <Route path="student" element={<Outlet />}>
            <Route index element={<div>StudentPage</div>}></Route>
            <Route path="1" element={<div>student1Page</div>}></Route>
            <Route path="ram" element={<Outlet />}>
              <Route index element={<div>This is Ram page</div>}></Route>
              <Route path=":id" element={<div>Dynamic route page</div>}></Route>
            </Route>
          </Route>
          <Route path="*" element={<div>ErrorPage</div>}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default NestedROuting1;
