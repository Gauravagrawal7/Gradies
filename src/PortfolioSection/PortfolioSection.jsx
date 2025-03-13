import React from "react";
import "./PortfolioSection.css";

const PortfolioSection = () => {
  return (
    <section className="portfolio-section">
      <div className="portfolio-title">
        <h2 className="portfolio-heading">
          <span style={{ color: "rgba(255,119,0,1)" }}>Portfolio</span>
          <span> Showcase </span>
        </h2>
        <p className="portfolio-description">
          Explore our stunning monochrome design highlights.
        </p>
      </div>
      <div className="portfolio-gallery">
        <div className="portfolio-image"></div>
        <div className="portfolio-image"></div>
      </div>
    </section>
  );
};

export default PortfolioSection;
