import React, { useEffect, useState } from "react";
import "./LifeSciencePath.css";

const pathData = [
  {
    title: "Equipment, Utility and Facility Validation",
    description: "We provide comprehensive CQV (Commissioning, Qualification, and Validation) services for equipment, utilities, and facility systems through robust IQ (Installation Qualification), OQ (Operational Qualification), and PQ (Performance Qualification) protocols. Our team ensures that all qualification studies are executed in accordance with GAMP 5, current regulatory expectations, and your internal procedures."
  },
  {
    title: "Cleaning Validation",
    description: "Our cleaning validation services include cycle development studies on various product and process-related soilings to establish effective and reproducible cleaning strategies. We perform cleaning validation using Clean-Out-of-Place (COP), Clean-In-Place (CIP), and Steam-In-Place (SIP) systems, ensuring removal of residues to acceptable limits. Our approach is data-driven, risk-based, and compliant with global regulatory standards—protecting product quality and preventing cross-contamination."
  },
  {
    title: "Computer System Validation",
    description: "Ensure data integrity and system compliance with our robust computer system validation services. We validate software, hardware, automation systems, and infrastructure to meet FDA, EMA, and global GxP requirements, including 21 CFR Part 11 compliance. We have expertise on SCADA systems, DeltaV, RockWell Automation, SIEMENs."
  },
  {
    title: "Environamental Monitoring",
    description: "Maintain the integrity of your cleanrooms and controlled areas with our continuous environmental monitoring solutions. We provide monitoring strategies, execution, and reporting for viable and non-viable particles, helping you stay GMP compliant."
  },
  {
    title: "Temperature Mapping Studies",
    description: "We conduct precise temperature mapping of storage units, warehouses, cold rooms, and transport vehicles. Our studies identify temperature fluctuations and help you maintain conditions essential for product stability and regulatory adherence."
  },
  {
    title: "Remediation Services",
    description: "If you’ve encountered regulatory findings or audit deficiencies, our remediation services are designed to get you back on track. We perform gap assessments, root cause analysis, and corrective action planning to restore compliance quickly and effectively."
  },
  {
    title: "Deviation & CAPA Backlog Closeout",
    description: "We help life sciences organizations efficiently close out accumulated deviations and CAPAs to restore compliance and reduce regulatory risk. Our team reviews, investigates, and remediates backlog records by aligning with quality standards and industry best practices."
  }
];

const dotPositions = [
  { cx: 120, cy: 59 },
  { cx: 260, cy: 150 },
  { cx: 490, cy: 194 },
  { cx: 700, cy: 230 },
  { cx: 920, cy: 250 },
  { cx: 1130, cy: 328 },
  { cx: 1350, cy: 330 }
];
const cloudPositions = [
  { cx: 197, cy: 115 },
  { cx: 242.5, cy: 205 },
  { cx: 437, cy: 247 },
  { cx: 616, cy: 285 },
  { cx: 803, cy: 305 },
  { cx: 982, cy: 382 },
  { cx: 947, cy: 385 }
];

const LifeSciencePath = () => {
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
    <section className="lifescience-path-section">
      <h2 className="lifescience-title">Life Sciences Project Solutions</h2>

      <div className="road-wrapper">
        <svg className="curvy-road" viewBox="0 0 1440 400" preserveAspectRatio="none">
          <path
            d="M0,40 
              C100,50 220,60 280,180 
              C380,310 490,100 700,230
              C800,320 950,180 1100,310 
              C1180,360 1250,370 1440,300"
            fill="none"
            stroke="#2d3c53"
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
                <div className={`cloud-tail-ls ${index == 0 ? "cloud-tail-ls-left" : index == pathData.length - 1 ? "cloud-tail-ls-right" : "cloud-tail-ls-center"}`} />
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
            fill="#2d3c53"
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

export default LifeSciencePath;
