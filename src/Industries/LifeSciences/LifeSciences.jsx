import { useState } from 'react'
import './LifeSciences.css';
import 'bootstrap/dist/css/bootstrap.css';
import IndustryHeading from '../IndustryHeading/IndustryHeading.jsx';
import data from "../data/data.json";
import IndustryExpertise from '../IndustryExpertise/IndustryExpertise.jsx';
import IndustryContentAccordion from '../IndustryContentAccordion/IndustryContentAccordion.jsx';
import IndustryChooseUS from '../IndustryChooseUs/IndustryChooseUs.jsx';
import LSVideo from "../assets/Healthcare.mp4";

function LifeSciences() {
  return (
    <>
      <div className='life-science-industry'  style={{ paddingBottom: '300px' }}>
        <IndustryHeading title={data.LifeSciences.heading.title} subtitle={data.LifeSciences.heading.subtitle} imageUrl={data.LifeSciences.heading.image}></IndustryHeading>
        <IndustryExpertise title={data.LifeSciences.expertise.title} subtitle={data.LifeSciences.expertise.subtitle} sections={data.LifeSciences.expertise.sections}></IndustryExpertise>
        <IndustryContentAccordion  leftContent={data.LifeSciences.contentAccordion.leftContent} accordionItems={data.LifeSciences.contentAccordion.accordionItems} video = {LSVideo}></IndustryContentAccordion>
        <IndustryChooseUS {...data.LifeSciences.chooseUs}></IndustryChooseUS>
      </div>
    </>
  );
}
export default LifeSciences;