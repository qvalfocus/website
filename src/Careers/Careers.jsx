import Footer from '../footer/Footer.jsx'
import Head from '../head/Head.jsx'
import { useState } from 'react'
import CareersPage from "./CareersPage/CareersPage.jsx";
import 'bootstrap/dist/css/bootstrap.css';


function Careers() {
  return (
    <>
      <div className='contact'>
        <Head></Head>
        <CareersPage></CareersPage>
        <Footer></Footer>
      </div>
    </>
  )
};
export default Careers;