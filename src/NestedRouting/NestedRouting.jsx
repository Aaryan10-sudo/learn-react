import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

const NestedRouting = () => {
  return (
    <>
      <Routes>
        {/* <Route path="/a" element={<div></div>}></Route>
        <Route path="/a/a1"></Route>
        <Route path="/a/a1/a2"></Route> */}
        <Route path="/" element={<Outlet />}>
          <Route index element={<div>This is home page</div>}></Route>
          <Route path="a" element={<Outlet />}>
            <Route index element={<div>This is a page</div>}></Route>
            <Route path="a1" element={<Outlet />}>
              <Route index element={<div>This is a1 page</div>}></Route>
              <Route path="a2" element={<div>This is a2 page</div>}></Route>

              <Route path=":id" element={<div>Random Page</div>}></Route>
            </Route>
          </Route>
        </Route>
      </Routes>
    </>
  );
};

export default NestedRouting;
