import React, { useState, useEffect } from "react";
import "./ContentDisplay1.css";
import imageone from "./assets/contentImage.png";
import { useNavigate } from "react-router-dom";
import videoone from "./assets/contentVideo.mp4";
import videotwo from "./assets/Content_Video.mp4";

function ContentDisplay1() {
  const navigate = useNavigate();
  return (
    <div className="container-xxl py-6" id="about">
      <div className="container">
        <div style={{color: "#2d3c53"}}>
          About QvalFocus_____________
          <h2 className="lh-base mb-0" style={{"fontWeight":700}}>
            WHO WE ARE
          </h2>
        </div>
        <div className="row g-5">
          <div className="col-lg-6 wow fadeInUp">
            <div className="row g-3 mb-4">
              <div className="col-md-12">
                <img className="img-fluid rounded w-75" style={{paddingLeft: "100px", paddingTop: "45px"}} src={imageone}></img>
                {/*<video className="img-fluid rounded w-100"
                    src={videotwo}
                    autoPlay
                    loop
                    muted
                    playsInline
                >
                </video>*/}
              </div>
            </div>
          </div>
          <div className="col-lg-6 wow fadeInUp" style={{paddingTop:"80px"}}>
            <div className="d-flex align-items-center mb-5">
              <h4 className="jj" style={{fontWeight: "700px"}}>
                Welcome to QvalFocus: Focused on Delivering Quality that sets us Apart.
              </h4>
            </div>
            <p style={{fontFamily:"system-ui"}}>
              As a premier professional services organization, we are defined by an unwavering commitment to excellence, offering unparalleled precision in every partnership. Our expertise lies in seamlessly aligning top-tier talent with industry leaders in the dynamic landscapes of Life Sciences and Information Technology. Embark on a collaborative journey with us, where we not only help further the careers of our employees but also help our customers make strides in the Life Sciences Industry with a focus on Quality.
            </p>
            <button className="mt-4 px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 transition read-more"
              onClick={() => navigate("/about-us")}
            >
              Know More
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContentDisplay1;

//<img className="img-fluid rounded w-100" src={imageone}></img>