import React from "react";
import "./Service.css";

function Service(props) {
  return (
    <div className="service">
      <img src={props.image} alt="service" className="service__image" />
      <h3>{props.title}</h3>
      <p>{props.description}</p>
    </div>
  );
}

export default Service;
