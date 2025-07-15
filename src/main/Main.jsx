import { useState } from 'react'
import './Main.css';
import ImageSlider from './imageSlider/ImageSlider.jsx';
import ContentDisplay1 from './contentDisplay1/ContentDisplay1.jsx';
import 'bootstrap/dist/css/bootstrap.css';
import ServiceDisplay from './serviceDisplay/ServiceDisplay.jsx';
import WhatWeDo from './whatWeDo/WhatWeDo.jsx';
import IndustriesSection from './industriesSection/IndustriesSection.jsx';

function Main() {
  //const [count, setCount] = useState(0)

  return (
    <>
      <div className='main-content'>
        <ImageSlider></ImageSlider>
        <ContentDisplay1></ContentDisplay1>
        <IndustriesSection></IndustriesSection>
        <ServiceDisplay></ServiceDisplay>
        <WhatWeDo></WhatWeDo>
      </div>
    </>
  )
}

export default Main
