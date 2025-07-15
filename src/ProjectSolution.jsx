import ProjectSolutions from "./Services/ProjectSolutions/ProjectSolutions.jsx";
import Footer from './footer/Footer.jsx'
import Head from './head/Head.jsx'
import 'bootstrap/dist/css/bootstrap.css';

function ProjectSolution() {
  return (
    <>
      <Head></Head>
      <ProjectSolutions></ProjectSolutions>
      <Footer></Footer>
    </>
  );
}

export default ProjectSolution;