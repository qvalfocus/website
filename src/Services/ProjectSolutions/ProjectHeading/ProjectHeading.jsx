import React from "react";
import "./ProjectHeading.css";

const ProjectHeading = () => {
  return (
    <section className="staffing-hero">
      <div className="overlay-content">
        <h1>Project Solution</h1>
        <p>Focused on quality, driven by expertise.</p>
      </div>

      {/* Wave Shape */}
      <div className="wave-container">
        <svg viewBox="0 0 1440 320" preserveAspectRatio="none">
        <path fill="#ffffff" d="M0,160 C360,400 1080,40 1440,240 L1440,320 L0,410 Z"></path>
        </svg>
      </div>
    </section>
  );
};

export default ProjectHeading;
