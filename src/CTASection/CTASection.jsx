import React from "react";
import "./CTASection.css";

const CTASection = () => {
  return (
    <section className="cta-section">
      <div className="cta-container">
        <div className="cta-content">
          <div className="cta-text">
            <h2 className="cta-heading">
              <span>Get Started with</span>
              <span style={{ color: "rgba(255,119,0,1)" }}>Us Today</span>
            </h2>
            <p className="cta-description">
              Reach out now to discover how we can elevate your online presence
              and drive results.
            </p>
          </div>
          <div className="cta-actions">
            <button className="cta-button-primary">Contact</button>
            <button className="cta-button-secondary">Learn More</button>
          </div>
        </div>
        <div className="cta-image"></div>
      </div>
    </section>
  );
};

export default CTASection;
