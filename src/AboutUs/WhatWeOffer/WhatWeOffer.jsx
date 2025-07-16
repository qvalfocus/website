import { useState, useEffect, useRef } from "react";
import "./WhatWeOffer.css";
import fem from "./assets/FlexibleEngagementModels.png";
import ie from "./assets/IndustryExpertise.png";
import ss from "./assets/ScalableSolutions.png";
import tfa from "./assets/TalentFirstApproach.png";
import cqf from "./assets/ComplianceQualityFocus.png";

export default function WhatWeOfferSection() {
  const tabs = [
    {
      title: "Flexible Engagement Models",
      image: fem,
      content: "Contract, contract-to-hire, direct hire, executive search, FSP teams, and project-based outsourcing tailored to your needs.",
    },
    {
      title: "Industry Expertise",
      image: ie,
      content: "Deep experience delivering high standards in Life Sciences, Pharma, Biotech, and IT.",
    },
    {
      title: "Scalable Solutions",
      image: ss,
      content: "From individual consultants to fully managed teams, we offer scalable talent and project solutions.",
    },
    {
      title: "Talent-First Approach",
      image: tfa,
      content: "Our rigorous screening and cultural alignment process ensures you get the right fit every time.",
    },
    {
      title: "Compliance & Quality Focus",
      image: cqf,
      content: "Strong emphasis on regulatory compliance and quality assurance, especially in validated environments.",
    },
  ];

  const [activeIndex, setActiveIndex] = useState(0);
  const timerRef = useRef(null);

  useEffect(() => {
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, 3000);

    return () => clearInterval(timerRef.current);
  }, []);

  const handleTabClick = (index) => {
    clearInterval(timerRef.current);
    setActiveIndex(index);
    timerRef.current = setInterval(() => {
      setActiveIndex((prev) => (prev + 1) % tabs.length);
    }, 3000);
  };

  return (
    <section className="w-full py-16" style={{ backgroundColor: "#2d3c53" }}>
      <div className="max-w-6xl mx-auto px-4">
        <h2 className="text-4xl md:text-5xl font-bold text-white mb-8">
          What We Offer
        </h2>

        {/* Tabs */}
        <div className="flex flex-wrap gap-4 mb-8">
          {tabs.map((tab, index) => (
            <div
              key={index}
              className="relative cursor-pointer px-4 py-2 border rounded-md overflow-hidden text-white border-white"
              onClick={() => handleTabClick(index)}
            >
              <span className="relative z-10">{tab.title}</span>
              <span
                className={`absolute left-0 top-0 h-full bg-blue-400 opacity-40 z-0 transition-all duration-[3000ms]`}
                style={{
                  width: activeIndex === index ? "100%" : "0%",
                }}
              ></span>
            </div>
          ))}
        </div>

        {/* Image + Content */}
        <div className="relative w-full h-[30rem] rounded-lg overflow-hidden">
          <img
            src={tabs[activeIndex].image}
            alt={tabs[activeIndex].title}
            className="w-full h-full object-cover"
            loading="lazy"
            style={{opacity: 0.65}}
          />
          <div className="absolute inset-0 flex items-center justify-center px-8">
            <p className="text-white text-2xl font-semibold text-center">
              {tabs[activeIndex].content}
            </p>
          </div>
        </div>
      </div>
    </section>
  );
}
