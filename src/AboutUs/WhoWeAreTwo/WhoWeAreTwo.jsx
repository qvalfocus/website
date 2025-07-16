import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img from "./assets/Test.jpg";

export default function WhoWeAreTwo() {
  return (
    <>
      <section className="w-full bg-white text-black py-20 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* LEFT: Image with rounded bottom */}
          <div className="w-full md:w-3/5 px-6 md:px-12">
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Vision</h3>
            <p className="text-base md:text-lg mb-8" style={{fontSize: "16px", lineHeight: "inherit"}}>
              To be the preferred strategic partner for organizations seeking excellence in talent, technology, and operational execution.
            </p>
            <div className="w-full md:w-3/5 px-6 md:px-12"></div>
            <h3 className="text-3xl md:text-4xl font-bold mb-4">Our Mission</h3>
            <p className="text-base md:text-lg mb-8" style={{fontSize: "16px", lineHeight: "inherit"}}>
              Our mission is to empower our clients by delivering high-impact staffing and project-based solutions that drive success, efficiency, and growth. We are committed to bridging the gap between exceptional talent and innovative companies through integrity, agility, and unmatched service.
            </p>
          </div>

          {/* RIGHT: Content */}

          <div className="basis-1/2 flex justify-center h-full">
            <div className="w-full h-full flex justify-center items-center">
              <img
                src={img}
                alt="Team working"
                className="h-full w-auto rounded-full object-cover shadow-2xl"
                style={{height: "690px"}}
              />
            </div>
          </div>
          
        </div>
      </section>
    </>
  );
}
