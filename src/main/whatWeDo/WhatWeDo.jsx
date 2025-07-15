// WhatWeDoSection.jsx
import React from "react";
import "./WhatWeDo.css";
import ClientCentric from "./assets/ClientCentric.png";
import DomainExpertise from "./assets/DomainExpertise.png";
import FlexibleEngagement from "./assets/FlexibleEngagements.png";
import Quality from "./assets/Quality.png";
import trackRecord from "./assets/TrackRecord.jpg";
import compliance from "./assets/Compliance.jpg";
import deepTalent from "./assets/DeepTalent.jpg";
import recruitment from "./assets/Recruiting.jpg";
import accountManagement from "./assets/AccountManagement.jpg";
import support from "./assets/Support.jpg";

const services = [
  { title: "Client-Centric Approach", image: ClientCentric, content: "We believe partnerships are built on trust, not transactions. That’s why we take a consultative approach listening first..." },
  { title: "Domain Expertise", image: DomainExpertise, content: "We specialize in Information Technology and Life Sciences and we live and breathe these industries our recruiters..." },
  { title: "Flexible Engagement", image: FlexibleEngagement, content: "Your business isn’t one-size-fits-all, and neither are our solutions. From contract and contract-to-hire to direct placement..." },
  { title: "Quality & Speed", image: Quality, content: "We move fast but never at the cost of quality. Our vetting process ensures every candidate we deliver is technically proficient..." },
  { title: "Proven Track Record", image: trackRecord, content: "With a history of successful placements across top-tier clients, we bring measurable impact through our deep network and delivery excellence..." },
  { title: "Regulatory Compliance Expertise", image: compliance, content: "We understand the criticality of compliance in Life Sciences and IT. From GxP to 21 CFR Part 11, our candidates are screened with regulatory readiness in mind..." },
  { title: "Deep Talent Pipeline", image: deepTalent, content: "Our pre-vetted bench of professionals allows us to fill urgent roles with speed—without sacrificing fit or performance..." },
  { title: "Technology-Driven Recruiting", image: recruitment, content: "We leverage AI-based sourcing, analytics, and automated workflows to identify top candidates faster and more accurately..." },
  { title: "Dedicated Account Management", image: accountManagement, content: "Each client is assigned a dedicated team that understands your business inside-out, ensuring personalized attention and seamless communication..." },
  { title: "Post-Placement Support", image: support, content: "Our relationship doesn’t end at placement. We stay engaged to ensure successful onboarding, retention, and continuous alignment with your goals..." },
];

const WhatWeDo = () => {
  const repeatedServices = [...services, ...services];

  return (
    <section className="what-we-do">
      <div className="container">
        <div style={{ color: "#ffffff", paddingBottom: "60px" }}>
          Why QvalFocus_________________________________
          <h2 className="lh-base mb-0" style={{ fontWeight: 700, textAlign: "left", fontSize: "2rem" }}>
            WHY WORK WITH US?
          </h2>
        </div>
        <div className="scroll-wrapper">
          <div className="tile-container scroll-animate">
            {repeatedServices.map((service, index) => (
              <div className="tile" key={index}>
                <img src={service.image} alt={service.title} />
                <div className="titleWWD">{service.title}</div>
                <div className="content">{service.content}</div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default WhatWeDo;
