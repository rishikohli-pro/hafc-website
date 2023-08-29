import React from "react";
import "./Navbar.css";
import Logo from "../../Assets/logo4.png";
import CallButton from "../CallButton/CallButton";

function Navbar() {
  return (
    <div className="navbar">
      <div className="navbar__left">
        <img className="navbar__image" src={Logo} alt="logo" />
      </div>
      <div className="navbar__right">
        <CallButton color="#F9A524" text="Call Us +971-04-3382777" />
      </div>
    </div>
  );
}

export default Navbar;
