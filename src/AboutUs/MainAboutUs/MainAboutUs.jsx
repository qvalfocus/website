import { useEffect, useRef } from "react";
import React, {useState } from "react";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useNavigate } from "react-router-dom";
import "./MainAboutUs.css";
import video from "./assets/AboutUsVideo.mp4";


gsap.registerPlugin(ScrollTrigger);

export default function MainAboutUs() {
  const navigate = useNavigate();
  const [hover, setHover] = useState(false);
  const videoRef = useRef(null);

  useEffect(() => {
    requestAnimationFrame(() => {
        window.scrollTo(0, 1000);
        setTimeout(() => {
          window.scrollTo(1000, 0);
        }, 100);
    });
    ScrollTrigger.create({
      trigger: videoRef.current,
      start: "top top",
      end: "+=100%",
      pin: true,
      scrub: true,
    });
  }, []);

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Full pinned video background */}
        <video
          ref={videoRef}
          className="absolute inset-0 w-full h-full object-cover"
          autoPlay
          loop
          muted
          playsInline
        >
          <source src = {video} type="video/mp4" />
        </video>

        {/* Text overlays video & scrolls normally */}
        <div className="relative z-10 flex flex-col justify-center items-center text-center h-screen px-4 text-white">
          <h1 className="text-6xl md:text-7xl font-bold mb-6">
            About Us
          </h1>
          <p className="max-w-2xl text-lg">
            QvalFocus empowers you with flexible, innovative staffing solutions.
          </p>
          <div
            onClick={() => navigate("/contact-us")}
            onMouseEnter={() => setHover(true)}
            onMouseLeave={() => setHover(false)}
            style={{
              position: "relative",
              display: "inline-block",
              padding: "12px 32px",
              borderRadius: "9999px",
              overflow: "hidden",
              color: hover ? "#1f2d5a" : "#1f3a5a",
              fontWeight: "600",
              cursor: "pointer",
              border: "1px solid #1f3a5a",
              transition: "color 200ms ease-in-out",
              backgroundColor: "white",
            }}
          >
            {/* Background fill layer */}
            <div
              style={{
                position: "absolute",
                top: 0,
                left: 0,
                height: "100%",
                width: hover ? "100%" : "0%",
                backgroundColor: "#88d0ff",
                transition: "width 300ms ease-in-out",
                zIndex: 0,
              }}
            />

            {/* Text layer */}
            <span
              style={{
                position: "relative",
                zIndex: 1,
              }}
            >
              Get In Touch
            </span>
          </div>
        </div>
      </div>
    </>
  );
}