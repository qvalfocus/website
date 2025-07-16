import React from 'react';
import './IndustriesSection.css';
import { useNavigate } from "react-router-dom";
import video from './assets/industryVideo.mp4';

function IndustriesSection() {
  const navigate = useNavigate();
  return (
    <div className="wrapper">
      <div style={{color: "#2d3c53", paddingLeft: "30px", paddingBottom: "50px"}}>
        Expertise in Industries_____________
        <h2 className="lh-base mb-0" style={{"fontWeight":700}}>
          WE DELIVER
        </h2>
      </div>

      <div className="box">
        <div className="videoSection">
          <video
            className="video"
            src={video}
            autoPlay
            muted
            loop
          />
        </div>

        <div className="contentSection">
          <h2 className="subHeading">Empowering IT & Life Sciences Through Innovation</h2>
          <p className="description">
          We specialize in delivering high-impact solutions to the IT and Life Sciences sectors — two industries where agility, compliance, and innovation are critical. Whether it's enabling digital transformation, ensuring regulatory adherence, or optimizing data-driven workflows, our team brings domain expertise and technical excellence to every project.
          From software development and system integration to life sciences data management and validation, we tailor our services to meet the unique needs of each domain — helping our clients move faster, smarter, and more confidently.
          </p>
          <div className="buttons">
            <button onClick={() => navigate("/life-sciences")} className="primaryBtn">Life Sciences </button>
            <button onClick={() => navigate("/information-technology")} className="secondaryBtn">Information Technologies</button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default IndustriesSection;
