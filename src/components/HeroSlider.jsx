import React, { useState } from "react";
import "./HeroSlider.css";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";
import slider1 from "../assets/images/slider1.jpg";
import slider2 from "../assets/images/slider2.jpg";

const slides = [
  {
    image: slider1,
    heading: "Benvenuti in Caf Unsic",
    text: "Offriamo formazione professionale di alta qualità.",
  },
  {
    image: slider2,
    heading: "Crescita della tua carriera",
    text: "Scopri i nostri corsi e servizi esclusivi.",
  },
];

const HeroSlider = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const prevSlide = () => {
    const index = currentIndex === 0 ? slides.length - 1 : currentIndex - 1;
    setCurrentIndex(index);
  };

  const nextSlide = () => {
    const index = currentIndex === slides.length - 1 ? 0 : currentIndex + 1;
    setCurrentIndex(index);
  };

  return (
    <div className="hero-slider">
      <div
        className="slide"
        style={{ backgroundImage: `url(${slides[currentIndex].image})` }}
      >
        <div className="slide-content">
          <h1>{slides[currentIndex].heading}</h1>
          <p>{slides[currentIndex].text}</p>
        </div>

        {/* Arrows */}
        <div className="arrow left-arrow" onClick={prevSlide}>
          <FaArrowLeft />
        </div>
        <div className="arrow right-arrow" onClick={nextSlide}>
          <FaArrowRight />
        </div>
      </div>
    </div>
  );
};

export default HeroSlider;
