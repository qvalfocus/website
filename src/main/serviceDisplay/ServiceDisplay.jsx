// ServicesSection.jsx
import React from "react";
import seviceImage from "./assets/services.svg";
import "./ServiceDisplay.css";
import { useNavigate } from "react-router-dom";

const ServiceDisplay = () => {
  const navigate = useNavigate();
  return (
    <section className="services-section">
      <div className="top-diagonal">
        <div className="services-row">
          <div className="services-div">
            <div className="services-text">
              <h1 style={{fontWeight: 700, fontSize: "4rem"}}>
                Our Services
              </h1>
              <p style={{fontSize: "25px", ontWeight: 500}}>
                We promise the best for our clients. Our company provides below listed services
              </p>
            </div>
            <div className="cards-container">
              <div className="service-card" onClick={() => navigate("/staffing-solutions")}>
                <h3>Staffing Solutions</h3>
                <p>At QvalFocus, we offer flexible and scalable staffing services tailored to your organization’s goals. Whether you need to fill critical roles quickly or build a long-term hiring strategy, our solutions ensure you have access to the right talent—when and where you need it.</p>
              </div>
              <div className="service-card" onClick={() => navigate("/project-solutions")}>
                <h3>Project Solutions</h3>
                <p>At QvalFocus, we provide end-to-end project-based solutions designed to help our clients accelerate delivery, improve efficiency, and meet regulatory or technical demands. Whether you're launching a new application, implementing a compliance initiative, or modernizing infrastructure.</p>
              </div>
            </div>
          </div>
          <div className="services-image-div">
            <img
              src={seviceImage}
              alt="Services"
              className="services-image"
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default ServiceDisplay;
