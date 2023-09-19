import React from "react";
import "./App.css";
import CallButton from "./Components/CallButton/CallButton";

function Thankyou() {
  return (
    <div className="App">
      <h1>Thank you for submitting your query!</h1>
      <CallButton link="/" text="Return to the website" />
    </div>
  );
}

export default Thankyou;
