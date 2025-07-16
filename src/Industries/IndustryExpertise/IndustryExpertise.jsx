import React from "react";
import "./IndustryExpertise.css";

const IndustryExpertise = ({ title, subtitle, sections }) => {
  return (
    <div className="industry-expertise-container">
      <h1 className="heading-expertise-title">{title}</h1>
      <p className="heading-expertise-subtitle">{subtitle}</p>
      <div className="custom-grid-container">
        {sections.map((section) => (
          <div key={section.id} className={`grid-item item-${section.id}`}>
            <img src={section.image} alt={section.title} />
            <div className="content-wrapper">
              <div className="content-title">{section.title}</div>
              <div className="content-description">{section.description}</div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default IndustryExpertise;
