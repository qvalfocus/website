import React, { useEffect, useState } from "react";
import "./StaffingPath.css";

const pathData = [
  {
    title: "Commissioning, Qualification & Validation (CQV) Resources",
    description: "Ensure the successful initiation of your projects with QvalFocus Commissioning and Qualification Resources. Our qualified professionals oversee the commissioning and qualification processes, guaranteeing compliance and efficiency in your Life Sciences endeavors."
  },
  {
    title: "Quality Control Resources",
    description: "Exceed quality benchmarks with QvalFocus Quality Control Resources. Our experts manage and optimize your quality control processes, ensuring precision and compliance in every facet of your operations."
  },
  {
    title: "Cleaning Validation Resources",
    description: "Maintain the highest hygiene standards with QvalFocus Cleaning Validation Resources. Our experienced professionals oversee and validate your cleaning processes, ensuring a safe and compliant environment in the Life Sciences sector."
  },
  {
    title: "Quality Assurance Resources",
    description: "Elevate your quality standards with QvalFocus specialized Quality Assurance and Resources services. Our dedicated personnel are committed to maintaining the highest quality throughout your processes, ensuring strict compliance and excellence in the Life Sciences industry."
  },
  {
    title: "Computer System Validation Resources",
    description: "Stay at the forefront of the digital landscape with QvalFocus Computer System Validation Resources. Our skilled professionals validate and maintain your computer systems, ensuring they consistently meet industry standards and regulations."
  },
  {
    title: "Quality Engineers, Manufacturing Engineers, Process Engineers",
    description: "Secure top-tier talent for critical engineering roles with QvalFocus. Connect with Quality Engineers, Manufacturing Engineers, and Process Engineers who bring both expertise and innovation to your projects."
  }
];

const dotPositions = [
  { cx: 120, cy: 59 },
  { cx: 280, cy: 181 },
  { cx: 520, cy: 187 },
  { cx: 750, cy: 257 },
  { cx: 1000, cy: 257 },
  { cx: 1250, cy: 350 }
];
const cloudPositions = [
  { cx: 197, cy: 92 },
  { cx: 260, cy: 236 },
  { cx: 462, cy: 242 },
  { cx: 658, cy: 310 },
  { cx: 872, cy: 310 },
  { cx: 1083, cy: 350 }
];

const StaffingPath = () => {
  const [current, setCurrent] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrent((prev) => (prev + 1) % pathData.length);
    }, 3000);
    return () => clearInterval(interval);
  }, []);

  const handleDotClick = (index) => {
    setCurrent(index);
  };

  return (
    <section className="staffing-path-section">
      <h2 className="staffing-title">Our Strategic Staffing Journey</h2>

      <div className="road-wrapper">
        <svg className="curvy-road" viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path
            d="M0,40 
              C100,50 220,60 280,180 
              C380,310 490,100 700,230
              C800,320 950,180 1100,310 
              C1180,360 1250,370 1440,300"
            fill="none"
            stroke="#ffffff"
            strokeWidth="20"
            strokeLinecap="round"
          />
          {dotPositions.map((pos, index) => (
            <circle
              key={index}
              r={current === index ? 18 : 12}
              cx={pos.cx}
              cy={pos.cy}
              className={`destination-dot ${current === index ? "active" : ""}`}
              onClick={() => handleDotClick(index)}
            />
          ))}
        </svg>

        <div className="bubble-wrapper">
          {cloudPositions.map((pos, index) =>
            current === index ? (
              <div
                key={index}
                className="speech-bubble cloud"
                style={{
                  top: `${pos.cy - 160}px`,
                  left: `${pos.cx}px`
                }}
              >
                <h3>{pathData[index].title}</h3>
                <div className="cloud-tail" />
              </div>
            ) : null
          )}
        </div>
      </div>
      <div className="description-container">
        <p>{pathData[current].description}</p>
      </div>
      <div className="toothy-wave">
        <svg viewBox="0 0 1440 80" preserveAspectRatio="none">
          <path
            fill="#ffffff"
            d="M0,45 
            Q10,55 20,45 
            T40,45 T60,45 T80,45 T100,45 T120,45 T140,45 T160,45 T180,45 
            T200,45 T220,45 T240,45 T260,45 T280,45 T300,45 T320,45 T340,45 
            T360,45 T380,45 T400,45 T420,45 T440,45 T460,45 T480,45 T500,45 
            T520,45 T540,45 T560,45 T580,45 T600,45 T620,45 T640,45 T660,45 
            T680,45 T700,45 T720,45 T740,45 T760,45 T780,45 T800,45 T820,45 
            T840,45 T860,45 T880,45 T900,45 T920,45 T940,45 T960,45 T980,45 
            T1000,45 T1020,45 T1040,45 T1060,45 T1080,45 T1100,45 T1120,45 
            T1140,45 T1160,45 T1180,45 T1200,45 T1220,45 T1240,45 T1260,45 
            T1280,45 T1300,45 T1320,45 T1340,45 T1360,45 T1380,45 T1400,45 
            T1420,45 T1440,45 
            V80 H0 Z"
          />
        </svg>
      </div>
    </section>
  );
};

export default StaffingPath;
