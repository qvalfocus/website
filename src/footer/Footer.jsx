import React from "react";
import "./Footer.css";
import map from "./assets/logo-light.png";
import logo from "../../src/assets/logo1.png";

const Footer = () => {
  return (
    <footer className="footer">
      <img src={map} alt="background" className="footer-bg" />
      <div className="container">
        <div className="footer-content">
          <div className="footer-divider"></div>
          <div className="footer-rows">
            <div className="footer-col contact">
              <img src={logo} alt="QvalFocus" className="footer-logo" />
              <p>
                <b>United States:</b>
                <br />666 Plainsboro Rd #615, Plainsboro Township, NJ 08536.
                <br /><br />
                <b>India:</b>
                <br />Plot No 383, Bachpally, Hyderabad 500090, India.
              </p>
              <ul className="contact-list">
                <li><span>+1(609) 701 - 9988</span></li>
                <li><span>info@qvalfocus.com</span></li>
              </ul>
            </div>
            <div className="footer-col links">
              <div className="link-section">
                <h4>Careers</h4>
                <ul>
                  <li><a href="careers.html">Current Openings</a></li>
                  <li><a href="staffing.html">Staffing Solutions</a></li>
                  <li><a href="project.html">Project Solutions</a></li>
                  <li><a href="blogs.html">Blogs & Articles</a></li>
                </ul>
              </div>
              <div className="link-section">
                <h4>Industries</h4>
                <ul>
                  <li><a href="life-solutions.html">Life Sciences</a></li>
                  <li><a href="it.html">Information Technology</a></li>
                  <li><a href="#">Leadership Team</a></li>
                  <li><a href="#">Vision & Mission</a></li>
                </ul>
              </div>
              <div className="link-section">
                <h4>About</h4>
                <ul>
                  <li><a href="#">LinkedIn</a></li>
                  <li><a href="#">Who We Are</a></li>
                  <li><a href="contact.html">Contact</a></li>
                  <li><a href="#">Privacy Policy</a></li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
