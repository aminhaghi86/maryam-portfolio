import React from "react";
import { HeroInfo } from "../../utils/data";
const Hero = () => {
  return (
    <div className="hero-container">
      <h2>{HeroInfo.content}</h2>
      <div className="image-container-book-hero">
        <img src={HeroInfo.imageHero} alt="hero-image" className="hero-image" />
        <img
          width={400}
          height={400}
          src={HeroInfo.imageBook}
          alt="book-image"
          className="book-image"
        />
      </div>
    </div>
  );
};

export default Hero;
