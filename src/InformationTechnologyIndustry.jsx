import InformationTechnology from "./Industries/InformationTechnology/InformationTechnology.jsx";
import Footer from './footer/Footer.jsx'
import Head from './head/Head.jsx'
import 'bootstrap/dist/css/bootstrap.css';

function InformationTechnologyIndustry() {
  return (
    <>
      <Head forceTransparent={false}></Head>
      <InformationTechnology></InformationTechnology>
      <Footer></Footer>
    </>
  );
}

export default InformationTechnologyIndustry;