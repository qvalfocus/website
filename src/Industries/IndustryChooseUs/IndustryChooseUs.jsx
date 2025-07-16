import React from "react";
import "./IndustryChooseUS.css";

const IndustryChooseUS = ({ imageUrl, heading, subHeading, description }) => {
  const img = new URL(imageUrl, import.meta.url).href;
  return (
    <section className="industry-chooseus-section">
      <div className="industry-left">
        <img src={img} alt={heading} className="industry-image" />
      </div>
      <div className="industry-right">
        <h2 className="industry-heading">{heading}</h2>
        <h3 className="industry-subheading">{subHeading}</h3>
        <p className="industry-description">{description}</p>
      </div>
    </section>
  );
};

export default IndustryChooseUS;
