// StaffingSolutionsImageSection.jsx
import React from "react";
import "./StaffingImageSection.css";
import image1 from "./assets/project.png";
import image2 from "./assets/talent.png";

const StaffingImageSection = () => {
  return (
    <section className="services-image-section">
      <div className="service-block">
        <div className="image-wrapper fade-in-left">
          <img src={image1} alt="Project Solutions" />
        </div>
        <div className="text-content">
          <h2>Project Delivery</h2>
          <p>
            Our Project Delivery solutions offer comprehensive support across the entire project lifecycle. We source, onboard, and manage skilled professionals to execute key initiatives whether IT, Life Sciences, or cross-functional programs. From kickoff to completion, we ensure seamless execution, consistent quality, and measurable results that align with your delivery goals.
          </p>
        </div>
      </div>

      <div className="service-block reverse">
        <div className="image-wrapper fade-in-right">
          <img src={image2} alt="Staffing Solutions" />
        </div>
        <div className="text-content">
          <h2>Talent Partnership</h2>
          <p>
          At QvalFocus, our Talent Partnership model goes beyond traditional staffing. We immerse ourselves in your business to understand your long-term goals, company culture, and evolving skill needs. Acting as an extension of your HR and hiring teams, we offer consultative support, data-driven hiring strategies, and a flexible engagement model delivering not just people, but business-aligned solutions that drive sustained success.
          </p>
        </div>
      </div>
    </section>
  );
};

export default StaffingImageSection;
