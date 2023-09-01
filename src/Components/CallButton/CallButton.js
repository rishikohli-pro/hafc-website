import React from "react";
import "./CallButton.css";

function CallButton(props) {
  const color = props.color;
  const text = props.text;
  const link = props.link;
  return (
    <div className="call-button">
      <a href={link} className="button-text">
        {text}
      </a>
    </div>
  );
}

export default CallButton;
