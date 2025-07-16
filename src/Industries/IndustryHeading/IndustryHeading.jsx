import React from "react";
import "./IndustryHeading.css";

const IndustryHeading = ({ title, subtitle, imageUrl }) => {
  return (
    <section className="heading-image-section">
      <h1 className="heading-title">{title}</h1>
      <p className="heading-subtitle">{subtitle}</p>
      <img
        src={imageUrl}
        alt={title}
        className="heading-image"
      />
    </section>
  );
};

export default IndustryHeading;
