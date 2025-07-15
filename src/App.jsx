import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Home from "./Home.jsx";
import StaffingSolution from "./staffingSolution.jsx";
import ProjectSolution from "./ProjectSolution.jsx";
import AboutUs from "./AboutUs/AboutUs.jsx"
//import LifeSciences from "./Industries/LifeSciences/LifeSciences.jsx";
//import InformationTechnology from "./Industries/InformationTechnology/InformationTechnology.jsx";
import LifeSciencesIndustry from "./LifeSciencesIndustry.jsx";
import InformationTechnologyIndustry from "./InformationTechnologyIndustry.jsx";
import Contact from "./Contact/Contact.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import Careers from "./Careers/Careers.jsx";

function App() {
  return (
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/project-solutions" element={<ProjectSolution />} />
        <Route path="/staffing-solutions" element={<StaffingSolution />} />
        <Route path="/life-sciences" element={<LifeSciencesIndustry />} />
        <Route path="/information-technology" element={<InformationTechnologyIndustry />} />
        <Route path="/about-us" element={<AboutUs />} />
        <Route path="/contact-us" element={<Contact />} />
        <Route path="/careers" element={<Careers />} />
      </Routes>
  );
}

export default App;