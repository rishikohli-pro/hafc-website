import React from "react";
import "./CallButton.css";

function CallButton(props) {
  const color = props.color;
  const text = props.text;
  return (
    <div className="call-button">
      <a href="/" className="button-text">
        {text}
      </a>
    </div>
  );
}

export default CallButton;
