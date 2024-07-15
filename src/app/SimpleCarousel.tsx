"use client";
import React, { useState } from "react";
import styles from "./Carousel.module.css";
import fon from "../../public/fon.png";

const images = [
  "/fon.png",
  "/images/image2.png",
  "/images/image3.png",
  "/images/image4.png",
];

const SimpleCarousel: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === images.length - 1 ? 0 : prevIndex + 1
    );
  };

  return (
    <div className="container">
      <div className={styles.carousel}></div>
      <div className={styles.carouselItem}>
        <img
          src={images[currentIndex]}
          alt={`Slide ${currentIndex + 1}`}
          className={styles.carouselImage}
        />
        <div className={styles.buttons}>
          <button onClick={handlePrev} className={styles.btnCircle}>
            ❮
          </button>
          <button onClick={handleNext} className={styles.btnCircle}>
            ❯
          </button>
        </div>
      </div>
    </div>
  );
};

export default SimpleCarousel;
