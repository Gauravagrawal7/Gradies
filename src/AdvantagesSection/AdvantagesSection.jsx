import React from "react";
import "./AdvantagesSection.css";

const AdvantagesSection = () => {
  return (
    <section className="advantages-section">
      <div className="advantages-container">
        <div className="advantages-content">
          <h2 className="advantages-heading">
            <span>Discover the</span>
            <span style={{ color: "rgba(255,119,0,1)" }}>
              {" "}
              exceptional advantages{" "}
            </span>
            <span>of partnering with us for your needs.</span>
          </h2>
          <p className="advantages-description">
            Our services are designed to elevate your experience, ensuring
            quality and efficiency at every step. Choose us for innovative
            solutions that drive results and exceed expectations.
          </p>
        </div>
        <div className="advantages-image"></div>
      </div>
    </section>
  );
};

export default AdvantagesSection;
