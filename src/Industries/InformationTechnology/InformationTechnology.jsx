import React from "react";
import "./InformationTechnology.css";
import { useState } from 'react';
import 'bootstrap/dist/css/bootstrap.css';
import IndustryHeading from '../IndustryHeading/IndustryHeading.jsx';
import data from "../data/data.json";
import IndustryExpertise from '../IndustryExpertise/IndustryExpertise.jsx';
import IndustryContentAccordion from '../IndustryContentAccordion/IndustryContentAccordion.jsx';
import IndustryChooseUS from '../IndustryChooseUs/IndustryChooseUs.jsx';
import LSVideo from "../assets/TalentDevelopment.mp4";

function InformationTechnology() {
  return (
    <>
      <div className='information-technology-industry'  style={{ paddingBottom: '300px' }}>
        <IndustryHeading title={data.InformationTechnology.heading.title} subtitle={data.InformationTechnology.heading.subtitle} imageUrl={data.InformationTechnology.heading.image}></IndustryHeading>
        <IndustryExpertise title={data.InformationTechnology.expertise.title} subtitle={data.InformationTechnology.expertise.subtitle} sections={data.InformationTechnology.expertise.sections}></IndustryExpertise>
        <IndustryContentAccordion  leftContent={data.InformationTechnology.contentAccordion.leftContent} accordionItems={data.InformationTechnology.contentAccordion.accordionItems} video = {LSVideo}></IndustryContentAccordion>
        <IndustryChooseUS {...data.InformationTechnology.chooseUs}></IndustryChooseUS>
      </div>
    </>
  );
}
export default InformationTechnology;