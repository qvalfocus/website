import { useState } from 'react'
import './ProjectSolutions.css';
import ProjectHeading from "./ProjectHeading/ProjectHeading.jsx";
import LifeSciencePath from './LifeSciencePath/LifeSciencePath.jsx';
import ITPath from './ITPath/ITPath.jsx';
import ITProjectSol from './ITProjectSol/ITProjectSol.jsx';
import ScrollStoryHero from './ScrollStoryHero/ScrollStoryHero.jsx';
import 'bootstrap/dist/css/bootstrap.css';

function ProjectSolutions() {
  return (
    <>
      <div className='main-project-content'  style={{ paddingBottom: '0px' }}>
        <ProjectHeading></ProjectHeading>
        <ScrollStoryHero></ScrollStoryHero>
        <ITProjectSol></ITProjectSol>
      </div>
    </>
  );
}

export default ProjectSolutions;
