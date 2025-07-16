import { useEffect, useRef } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import img from "./assets/Test.jpg";

export default function WhoWeAre() {
  return (
    <>
      <section className="w-full bg-white text-black py-20 relative z-20">
        <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center">
          {/* LEFT: Image with rounded bottom */}
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

          {/* RIGHT: Content */}
          <div className="w-full md:w-3/5 px-6 md:px-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4">Who We Are</h2>
            <p className="text-base md:text-lg mb-8" style={{fontSize: "16px", lineHeight: "inherit"}}>
              QvalFocus, Inc. is an emerging professional services provider delivering
              innovative, high-quality solutions across the Life Sciences and Information
              Technology sectors. Backed by modern technology, passionate experts, and a
              leadership team with over 50 years of combined industry experience, we specialize
              in connecting top-tier talent with forward-thinking organizations. We do the
              heavy lifting—so you can focus on delivering your projects on time with skilled
              and reliable resources.
            </p>

            <h3 className="text-xl md:text-1xl font-bold mb-4">Our Core Values</h3>
            <ul className="space-y-4 text-sm md:text-base">
              {[
                {
                  icon: "🛡️",
                  title: "Integrity",
                  text: "We operate with transparency and honesty in everything we do.",
                },
                {
                  icon: "🏆",
                  title: "Excellence",
                  text: "We strive for the highest standards in our services, solutions, and people.",
                },
                {
                  icon: "🎯",
                  title: "Customer Focus",
                  text: "Your goals are our priority—we’re driven by your success.",
                },
                {
                  icon: "💡",
                  title: "Innovation",
                  text: "We embrace modern tools and thinking to solve today’s challenges.",
                },
                {
                  icon: "🤝",
                  title: "Collaboration",
                  text: "We believe in building strong, long-term relationships with clients and talent alike.",
                },
              ].map((item, index) => (
                <li key={index} className="flex items-start space-x-3">
                  <span className="text-lg mt-0.5">{item.icon}</span>
                  <p>
                    <strong>{item.title}:</strong> {item.text}
                  </p>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </section>
    </>
  );
}
