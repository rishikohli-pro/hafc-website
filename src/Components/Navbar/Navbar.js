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
        <CallButton link="tel:+971566060173" text="Call Us +971-566060173" />
      </div>
    </div>
  );
}

export default Navbar;
