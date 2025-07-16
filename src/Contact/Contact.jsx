import Footer from '../footer/Footer.jsx'
import Head from '../head/Head.jsx'
import { useState } from 'react'
import ContactPage from "./ContactPage/ContactPage.jsx";
import 'bootstrap/dist/css/bootstrap.css';


function Contact() {
  return (
    <>
      <div className='contact'>
        <Head></Head>
        <ContactPage></ContactPage>
        <Footer></Footer>
      </div>
    </>
  )
};
export default Contact;