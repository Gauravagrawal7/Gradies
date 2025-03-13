import React from "react";
import "./HeroSection.css";

const HeroSection = () => {
  return (
    <div className="container">
      <div className="column">
        <div className="content">
          <h1 className="headline">
            Elevate Your Brand with <span className="highlight">Excellent</span>{" "}
            Design
          </h1>
          <p className="description">
            At our agency, we specialize in creating visually striking websites
            that capture your brand's essence. Let us help you stand out in a
            crowded digital landscape.
          </p>
        </div>
        <div className="actions">
          <button className="buttonPrimary">Get Started</button>
          <button className="buttonSecondary">Learn More</button>
        </div>
      </div>
      <div className="content2">
        <div className="column2">
          <div className="placeholderImage"></div>
          <div className="placeholderImage"></div>
          <div className="placeholderImage smallImage"></div>
        </div>
        <div className="column3">
          <div className="placeholderImage smallImage"></div>
          <div className="placeholderImage"></div>
          <div className="placeholderImage"></div>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
