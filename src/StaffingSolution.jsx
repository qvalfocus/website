import StaffingSolutions from "./Services/StaffingSolutions/StaffingSolutions.jsx";
import Footer from './footer/Footer.jsx'
import Head from './head/Head.jsx'
import 'bootstrap/dist/css/bootstrap.css';

function staffingSolution() {
  return (
    <>
      <Head></Head>
      <StaffingSolutions></StaffingSolutions>
      <Footer></Footer>
    </>
  );
}

export default staffingSolution;