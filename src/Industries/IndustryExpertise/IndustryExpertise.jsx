import React from "react";
import "./IndustryExpertise.css";

import ls1 from "../assets/Aseptic-Manufacturing.jpg";
import ls2 from "../assets/CAR-T-Facilities.png";
import ls3 from "../assets/API-Bulk-Manufacturers.png";
import ls4 from "../assets/Analytical-Laboratory-Instrumentation.png";
import ls5 from "../assets/Clinical-Research-Organizations.png";  
import ls6 from "../assets/Microbiology-Testing.jpg";

import it1 from "../assets/SoftwareDevelopment.jpg";
import it2 from "../assets/QualityEngineering.jpg";
import it3 from "../assets/CloudAndDevOps.jpg";       
import it4 from "../assets/DataAnalytics.jpg";
import it5 from "../assets/CyberSecurity.jpg";
import it6 from "../assets/Infrastructure.jpg";



const IndustryExpertise = ({ title, subtitle, sections }) => {
  const itImages = [it1, it2, it3, it4, it5, it6];
  const lsImages = [ls1, ls2, ls3, ls4, ls5, ls6];
  const images = title === "Expertise Across Technologies" ? itImages : lsImages;
  return (
    <div className="industry-expertise-container">
      <h1 className="heading-expertise-title">{title}</h1>
      <p className="heading-expertise-subtitle">{subtitle}</p>
      <div className="custom-grid-container">
        {sections.map((section) => (
          <div key={section.id} className={`grid-item item-${section.id}`}>
            <img src={images[section.id - 1]} alt={section.title} />
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
