import React from "react";
import "./IndustryHeading.css";
import itimg from "../assets/InformationTechnologyBanner.jpg";
import lsimg from "../assets/LifeScienceBaneer.png";


const IndustryHeading = ({ title, subtitle, imageUrl }) => {
  var img = itimg;
  if (imageUrl == "src/Industries/assets/LifeScienceBaneer.png") {
    img = lsimg;
  }
  return (
    <section className="heading-image-section">
      <h1 className="heading-title">{title}</h1>
      <p className="heading-subtitle">{subtitle}</p>
      <img
        src={img}
        alt={title}
        className="heading-image"
      />
    </section>
  );
};

export default IndustryHeading;
