import React from "react";
import { motion } from "framer-motion";
import "./ITProjectSol.css";
import { experiences } from "./experienceData";

function ITProjectSol() {
  return (
    <section className="work-experience">
      <motion.div 
        className='exp-text'
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1, ease: "easeOut" }}
        viewport={{ once: false, amount: 0.2 }}
      >
      <div className="exp-text">
        <p className="exp-head-text-light">IT Project Solution</p>
        <h2 className="exp-sub-text-light">Delivering tailored IT project solutions to drive efficiency, innovation, and business growth.</h2>
      </div>
      </motion.div>
      {/*<h2 className="title"></h2>*/}
      <div className="timeline">
        {experiences.map((exp, index) => (
          <div key={index} className={`timeline-item ${index % 2 === 0 ? "left" : "right"}`}>
            {index % 2 === 0 ? (
              <motion.div 
                className="ITcontent"
                initial={{ opacity: 0, x: -100, rotate: -5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <h3>{exp.title}</h3>
                <p className="company">{exp.company}</p>
              </motion.div>
            ) : null}

            <motion.div 
              className="circle"
              initial={{ scale: 0 }}
              whileInView={{ scale: 1 }}
              transition={{ duration: 0.5, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <div>{index + 1}</div>
            </motion.div>

            {index % 2 !== 0 ? (
              <motion.div 
                className="ITcontent"
                initial={{ opacity: 0, x: 100, rotate: 5 }}
                whileInView={{ opacity: 1, x: 0, rotate: 0 }}
                transition={{ duration: 0.8, ease: "easeOut" }}
                viewport={{ once: false, amount: 0.2 }}
              >
                <h3>{exp.title}</h3>
                <p className="company">{exp.company}</p>
              </motion.div>
            ) : null}
          </div>
        ))}
        {/*
          <div key={experiences.length} className={`timeline-item ${experiences.length % 2 === 0 ? "left" : "right"}`}>
          {experiences.length % 2 === 0 ? (
            <motion.div 
              className="content"
              initial={{ opacity: 0, x: -100, rotate: -5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3><a href={resume} download="Anish_Koppula_Resume.pdf" class="download-button">My Resume</a></h3>
            </motion.div>
          ) : null}

          <motion.div 
            className="circle"
            initial={{ scale: 0 }}
            whileInView={{ scale: 1 }}
            transition={{ duration: 0.5, ease: "easeOut" }}
            viewport={{ once: false, amount: 0.2 }}
          >
            <div>{experiences.length + 1}</div>
          </motion.div>

          {experiences.length % 2 !== 0 ? (
            <motion.div 
              className="content"
              initial={{ opacity: 0, x: 100, rotate: 5 }}
              whileInView={{ opacity: 1, x: 0, rotate: 0 }}
              transition={{ duration: 0.8, ease: "easeOut" }}
              viewport={{ once: false, amount: 0.2 }}
            >
              <h3><a href={resume} download="Anish_Koppula_Resume.pdf" class="download-button">My Resume</a></h3>
            </motion.div>
          ) : null}
          </div>
        */}
      </div>
    </section>
  ); 
}

export default ITProjectSol;
