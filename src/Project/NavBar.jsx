import React from "react";
import { NavLink } from "react-router-dom";

const NavBar = () => {
  return (
    <nav
      style={{
        padding: "10px",
        textDecoration: "none",
        backgroundColor: "gray",
      }}
    >
      {" "}
      <NavLink
        style={{ padding: "10px", color: "white", textDecoration: "none" }}
        to={"/product"}
      >
        My Products
      </NavLink>
      <NavLink
        style={{ padding: "10px", color: "white", textDecoration: "none" }}
        to={"/product/create"}
      >
        Create Product
      </NavLink>
    </nav>
  );
};

export default NavBar;
