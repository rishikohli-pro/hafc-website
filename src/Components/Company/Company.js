import React from "react";
import "../Company/Company.css";

function Company(props) {
  const image = props.image;
  return (
    <div>
      <div className="companyCard">
        <img src={image} alt="company" className="companyCard__image" />
      </div>
    </div>
  );
}

export default Company;
