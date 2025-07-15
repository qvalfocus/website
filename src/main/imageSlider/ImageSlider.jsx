import React, { useState, useEffect } from "react";
import sliderimage1 from './assets/sliderimage1.jpg';
import sliderimage2 from './assets/sliderimage2.png';
import sliderimage3 from './assets/sliderimage3.png';
import sliderimage4 from './assets/sliderimage4.png';
import sliderimage5 from './assets/sliderimage5.png';
import sliderimage6 from './assets/sliderimage6.png';
import sliderimage7 from './assets/sliderimage7.png';
import sliderimage8 from './assets/sliderimage8.png';
import sliderimage9 from './assets/sliderimage9.jpg';

import "./ImageSlider.css";

const slides = [
  {
    id: 0,
    image: sliderimage1,
    text: "Welcome To QvalFocus",
    subtext: "Focused On Delivering Quality That Sets Us Apart."
  },
  {
    id: 1,
    image: sliderimage2,
    text: "Welcome To QvalFocus",
    subtext: "Focused On Delivering Quality That Sets Us Apart."
  },
  {
    id: 2,
    image: sliderimage3,
    text: "Welcome To QvalFocus",
    subtext: "Focused On Delivering Quality That Sets Us Apart."
  },
  {
    id: 3,
    image: sliderimage4,
    text: "Welcome To QvalFocus",
    subtext: "Focused On Delivering Quality That Sets Us Apart."
  },
  {
    id: 4,
    image: sliderimage5,
    text: "Welcome To QvalFocus",
    subtext: "Focused On Delivering Quality That Sets Us Apart."
  },
  {
    id: 5,
    image: sliderimage6,
    text: "Welcome To QvalFocus",
    subtext: "Focused On Delivering Quality That Sets Us Apart."
  },
  {
    id: 6,
    image: sliderimage7,
    text: "Welcome To QvalFocus",
    subtext: "Focused On Delivering Quality That Sets Us Apart."
  },
  {
    id: 7,
    image: sliderimage8,
    text: "Welcome To QvalFocus",
    subtext: "Focused On Delivering Quality That Sets Us Apart."
  },
  {
    id: 8,
    image: sliderimage9,
    text: "Welcome To QvalFocus",
    subtext: "Focused On Delivering Quality That Sets Us Apart."
  }
];

function ImageSlider() {
  const [currentIndex, setCurrentIndex] = useState(0);

  function clickpagination(a) {
    setCurrentIndex(a);
  }

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % slides.length);
    }, 5000); // Change image every 5 seconds

    return () => clearInterval(interval); // Cleanup on unmount
  }, []);

  const goToSlide = (index) => {
    setCurrentIndex(index);
  };

  return (
    <div className="slider">
      {slides.map((slide, index) => (
        <div
          className={`slide ${index === currentIndex ? "active" : ""}`}
          key={slide.id}
        >
          <div
            key={index === currentIndex ? `zoom-${index}` : `static-${index}`}
            className="slide-bg"
            style={{ backgroundImage: `url(${slide.image})` }}
          ></div>
        </div>
      ))}
      <div className={`overlay slide-text`}>
        <h2 className="slide-heading">{slides[0].text}</h2>
        <div className="slide-subtext">{slides[0].subtext}</div>
        <button className="mt-4 px-6 py-2 bg-blue-600 text-white hover:bg-blue-700 transition read-more"
          onClick={() => {
            const section = document.getElementById('about');
            if (section) section.scrollIntoView({ behavior: 'smooth' });
          }}
        >
          Read More
        </button>
      </div>
      {/* Pagination */}
      <div className="pagination">
        {slides.map((_, index) => (
          <div
            key={_.id}
            className={`dot ${index === currentIndex ? "active" : ""}`}
            onClick={() => goToSlide(index)}
          ></div>
        ))}
      </div>
    
    </div>
  );
};

export default ImageSlider;