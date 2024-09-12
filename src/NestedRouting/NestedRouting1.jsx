import React from "react";
import { Outlet, Route, Routes } from "react-router-dom";

const NestedRouting1 = () => {
  return (
    <>
      <Routes>
        <Route path="/" element={<Outlet />}>
          <Route index element={<div>This is a homepage..</div>}></Route>
          <Route path="student" element={<Outlet />}>
            <Route index element={<div>This is student page</div>}></Route>
            <Route path="1" element={<div>This is student1 page</div>}></Route>
            <Route path="ram" element={<Outlet />}>
              <Route index element={<div>This is Ram page</div>}></Route>
              <Route
                path=":id"
                element={<div>This is a dynamic page..</div>}
              ></Route>
            </Route>
          </Route>
          <Route path="*" element={<div>This is error page </div>}></Route>
        </Route>
      </Routes>
    </>
  );
};

export default NestedRouting1;
