import React, { useState } from "react";
import "./IndustryContentAccordion.css";

const IndustryContentAccordion = ({ leftContent, accordionItems, video }) => {
  const [openIndex, setOpenIndex] = useState(null);

  const handleToggle = (index) => {
    setOpenIndex(index === openIndex ? null : index);
  };

  return (
    <>
        <section className="content-accordion">
        <div className="left-panel">
            <h2 className="left-title">{leftContent.title}</h2>
            <h3 className="left-subtitle">{leftContent.subtitle}</h3>
            <p className="left-description">{leftContent.description}</p>
        </div>

        <div className="right-panel">
            {accordionItems.map((item, index) => (
            <div key={item.id} className="accordion-item">
                <div
                className={`accordion-header ${openIndex === index ? "active" : ""}`}
                onClick={() => handleToggle(index)}
                >
                <div className="plus-button">
                    {openIndex === index ? "−" : "+"}
                </div>
                <h4>{item.heading}</h4>
                </div>

                {openIndex === index && (
                <div className="accordion-content">
                    <p>{item.description}</p>
                </div>
                )}

                <div className="divider-line" />
            </div>
            ))}
        </div>
        </section>
        <div className="plyr__video-wrapper">
            <video id="player" src={video} autoPlay muted loop preload="metadata" style={{width: "100%", maxWidth: "100%"}}></video>        
        </div>
    </>
  );
};

export default IndustryContentAccordion;
