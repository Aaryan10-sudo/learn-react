import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

const NestedRouting = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<div>This is a Grandfather</div>}></Route>
          <Route path="nishant" element={<Outlet />}>
            <Route index element={<div>This is a father</div>}></Route>
            <Route path="ram" element={<Outlet />}>
              <Route index element={<div>This is a son</div>}></Route>
              <Route
                path="shyam"
                element={<div>This is a grandson</div>}
              ></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default NestedRouting;
