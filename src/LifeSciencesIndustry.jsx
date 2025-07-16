import LifeSciences from "./Industries/LifeSciences/LifeSciences.jsx";
import Footer from './footer/Footer.jsx'
import Head from './head/Head.jsx'
import 'bootstrap/dist/css/bootstrap.css';

function LifeSciencesIndustry() {
  return (
    <>
      <Head forceTransparent={false}></Head>
      <LifeSciences></LifeSciences>
      <Footer></Footer>
    </>
  );
}

export default LifeSciencesIndustry;