import { useState } from 'react'
import './AboutUs.css';
import MainAboutUs from './MainAboutUs/MainAboutUs.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import WhoWeAre from './WhoWeAre/WhoWeAre.jsx';
import WhatWeOffer from './WhatWeOffer/WhatWeOffer.jsx';
import WhoWeAreTwo from './WhoWeAreTwo/WhoWeAreTwo.jsx';
import LeadershipSection from './LeadershipSection/LeadershipSection.jsx';
import Head from '../head/Head.jsx';
import Footer from '../footer/Footer.jsx';

function AboutUs() {
  return (
    <section className="overflow-x-hidden">
        <Head></Head>
        <MainAboutUs></MainAboutUs>
        <WhoWeAre></WhoWeAre>
        <WhatWeOffer></WhatWeOffer>
        <WhoWeAreTwo></WhoWeAreTwo>
        <LeadershipSection></LeadershipSection>
        <Footer></Footer>
    </section>
  );
}

export default AboutUs;
