import React, { useEffect, useState } from "react";
import "./Head.css";
import logo from '../assets/logo1.png';
import 'bootstrap/dist/css/bootstrap.css';
import { library } from '@fortawesome/fontawesome-svg-core';
import { fab, faLinkedin } from '@fortawesome/free-brands-svg-icons'; 
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { useNavigate } from "react-router-dom";

library.add(fab); 

import { faFacebook, faTwitter, faInstagram } from '@fortawesome/free-brands-svg-icons'; 


function Head({ forceTransparent = true }) {
  const navigate = useNavigate();
  const [isVisible, setIsVisible] = useState(true);
  const [isTransparent, setIsTransparent] = useState(true);
  const [isAbsolute, setIsAbsolute] = useState(true); // New state for "absolute" positioning
  const [lastScrollY, setLastScrollY] = useState(0);
  const [showSubmenu, setShowSubmenu] = useState(false);
  const [showIndmenu, setIndSubmenu] = useState(false);
  const [showSocial, setShowSocial] = useState(false);

  const handleScroll = () => {
    const currentScrollY = window.scrollY;

    // Handle transparency and position logic
    setIsTransparent(currentScrollY === 0);
    setIsAbsolute(currentScrollY === 0); // Header is absolute only at the top

    // Handle visibility while scrolling
    if (currentScrollY > lastScrollY && currentScrollY > 50) {
      setIsVisible(false); // Hide on scroll down
    } else if (
      currentScrollY < lastScrollY ||
      currentScrollY + window.innerHeight >= document.documentElement.scrollHeight
    ) {
      setIsVisible(true); // Show on scroll up or at the bottom
    }

    setLastScrollY(currentScrollY);
  };

  const handleServicesHover = () => {
    setShowSubmenu(true);
  };

  const handleMouseLeave = () => {
    setShowSubmenu(false);
  };

  const handleIndustryHover = () => {
    setIndSubmenu(true);
  };

  const handleIndustryLeave = () => {
    setIndSubmenu(false);
  };

  const handleSocialHover = () => {
    setShowSocial(true);
  };

  const handleSocialLeave = () => {
    setShowSocial(false);
  };

  useEffect(() => {
    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, [lastScrollY]);

  return (
    <header
      className={`header ${isTransparent && forceTransparent ? "transparent" : ""} ${isAbsolute ? "absolute" : "fixed"} ${
        isVisible ? "visible" : "hidden"
      }`}
    >
      <div className={`header-top ${isTransparent && forceTransparent ? "top-tran" : ""}`}>
        <div className='col-lg-3'>
          <img className="logo" src={logo} alt="no image"></img>
        </div>
        <div className=' col-lg-9'>
          <ul className="nav-links">
            <li><a className={`${isTransparent && forceTransparent ? "col-white" : "col-black"}`} onClick={() => navigate("/")}>Home</a></li>
            <li><a onClick={() => navigate("/about-us")} className={`${isTransparent && forceTransparent ? "col-white" : "col-black"}`}>About Us</a></li>
            <li onMouseEnter={handleServicesHover} onMouseLeave={handleMouseLeave}>
              <a className={`${isTransparent && forceTransparent ? "col-white" : "col-black"}`}>Services</a>
              {showSubmenu && (
                <ul className="submenu">
                  <li><a onClick={() => navigate("/project-solutions")}>Project Solutions</a></li>
                  <li><a onClick={() => navigate("/staffing-solutions")}>Staffing Solutions</a></li>
                </ul>
              )}
            </li>
            <li onMouseEnter={handleIndustryHover} onMouseLeave={handleIndustryLeave}>
              <a className={`${isTransparent && forceTransparent ? "col-white" : "col-black"}`}>Industries</a>
              {showIndmenu && (
                <ul className="submenu">
                  <li><a onClick={() => navigate("/life-sciences")}>Life Sciences</a></li>
                  <li><a onClick={() => navigate("/information-technology")}>Information Technology</a></li>
                </ul>
              )}
            </li>
            <li><a onClick={() => navigate("/contact-us")} className={`${isTransparent && forceTransparent ? "col-white" : "col-black"}`}>Contact</a></li>
            <li><a onClick={() => navigate("/careers")} className={`${isTransparent && forceTransparent ? "col-white" : "col-black"}`}>Careers</a></li>
            {/*<li onMouseEnter={handleSocialHover} onMouseLeave={handleSocialLeave}>
              <a className={`${isTransparent && forceTransparent ? "col-white" : "col-black"}`}>Social Media</a>
              {true && (
                <ul className="submenu socialmenu">
                  <li><a href="https://www.facebook.com/"><FontAwesomeIcon icon={faFacebook} style={{ paddingRight: '10px', fontSize: '25px', color:'rgb(59, 89, 152)'}}/> Facebook</a></li>
                  <li><a href="https://www.twitter.com/"><FontAwesomeIcon icon={faTwitter} style={{ paddingRight: '10px', fontSize: '25px', color:'rgb(85, 172, 238)' }}/> Twitter</a></li>
                  <li><a href="https://www.linkedin.co"><FontAwesomeIcon icon={faLinkedin} style={{ paddingRight: '10px', fontSize: '25px', color:'rgb(9, 118, 180)'}}/> Linkedin</a></li>
                </ul>
              )}
            </li>*/}
          </ul>
        </div>
      </div>
    </header>
  );
};

export default Head;

