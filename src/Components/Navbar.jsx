import React from "react";
import logo from "../assets/logo.png";
// import { NavLink } from "react-router-dom";

const Navbar = () => {
  return (
    <div className="container-fluid">
      <div className="row">
        <div className="col-12 Navheader">
          <img src={logo} alt="" style={{ width: "50px", height: "50px" }} className="mt-1" />
          <span className="h2 mt-2">
            Movie Company
          </span>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
