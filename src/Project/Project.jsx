import React from "react";
import NavBar from "./NavBar";
import { Outlet, Route, Routes } from "react-router-dom";
import Create from "./Create";
import Myproduct from "./Myproduct";
import Footer from "./Footer";

const Project = () => {
  return (
    <div>
      <Routes>
        <Route
          path="/"
          element={
            <div>
              <NavBar />
              <Outlet />
              <Footer />
            </div>
          }
        >
          <Route index element={<div>Welcome to Project Page</div>}></Route>
          <Route path="product" element={<Outlet />}>
            <Route index element={<Myproduct />}></Route>
            <Route path="create" element={<Create />}></Route>
            <Route path=":id" element={<div>Specific</div>}></Route>
            <Route path="update/:id" element={<div>Update Page</div>}></Route>
          </Route>
        </Route>
      </Routes>
    </div>
  );
};

export default Project;
