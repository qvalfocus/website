import { useState } from 'react'
import './StaffingSolutions.css';
import StaffHeading from "./StaffingHeading/StaffingHeading.jsx";
import 'bootstrap/dist/css/bootstrap.css';
import StaffingImageSection from './StaffingImage/StaffingImageSection.jsx';
import StaffingPath from './StaffingPath/StaffingPath.jsx';


function StaffingSolutions() {
  return (
    <>
      <div className='main-Staffing-content' style={{ paddingBottom: '300px' }}>
        <StaffHeading></StaffHeading>
        <StaffingImageSection></StaffingImageSection>
        <StaffingPath></StaffingPath>
      </div>
    </>
  )
};

export default StaffingSolutions;
