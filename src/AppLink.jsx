import { NavLink } from "react-router-dom";
import "/src/index.css";
const AppLink = () => {
  return (
    <>
      <NavLink
        to={"/"}
        style={{
          margin: "20px",
          textDecoration: "none",
          fontWeight: "700",
          color: "black",
        }}
        className="siu"
      >
        Home
      </NavLink>
      <NavLink
        to={"/contact"}
        style={{
          margin: "20px",
          textDecoration: "none",
          fontWeight: "700",
          color: "black",
        }}
      >
        Contact
      </NavLink>
      <NavLink
        to={"/about"}
        style={{
          margin: "20px",
          textDecoration: "none",
          fontWeight: "700",
          color: "black",
        }}
      >
        About Us
      </NavLink>
    </>
  );
};

export default AppLink;
