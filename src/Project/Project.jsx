import React from "react";
import NavBar from "./NavBar";
import { Outlet, Route, Routes } from "react-router-dom";
import Create from "./Create";
import Myproduct from "./Myproduct";
import Footer from "./Footer";
import ViewProduct from "./ViewProduct";
import UpdateProduct from "./UpdateProduct";
import { useDispatch, useSelector } from "react-redux";
// import { changeAge, changeName } from "../Redux/infoSlice";
import {
  changeCompany,
  changeQuantity,
  changeName,
} from "../Redux/productSlice";

const Project = () => {
  let infoData = useSelector((state) => {
    return state.product;
  });
  let test = useDispatch();
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

            <Route path="update/:id" element={<UpdateProduct />}></Route>
            <Route path=":id" element={<ViewProduct />}></Route>
          </Route>
        </Route>
      </Routes>
      <br />
      <div> Info : {infoData.productName}</div>
      <div> Quantity : {infoData.quantity}</div>
      <div> Company : {infoData.company}</div>

      <button
        onClick={() => {
          test(changeName("PC"));
        }}
      >
        {" "}
        Change
      </button>
      <button
        onClick={() => {
          test(changeQuantity(25));
        }}
      >
        Quantity
      </button>
      <button
        onClick={() => {
          test(changeCompany("Tesla"));
        }}
      >
        Company
      </button>
    </div>
  );
};

export default Project;
