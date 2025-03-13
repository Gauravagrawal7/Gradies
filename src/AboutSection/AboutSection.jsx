import React from "react";
import "./AboutSection.css";

const AboutSection = () => {
  return (
    <section className="about-section">
      <div className="about-container">
        <div className="about-content">
          <div className="about-text">
            <h2 className="about-heading">
              <span>Transforming your vision into a stunning</span>
              <span style={{ color: "rgba(255,119,0,1)" }}>
                {" "}
                monochrome digital{" "}
              </span>
              <span>portfolio.</span>
            </h2>
            <p className="about-description">
              Our unique approach combines creativity with functionality,
              ensuring your portfolio stands out. Experience the power of
              monochrome design that captivates and engages your audience.
            </p>
          </div>
          <div className="about-features">
            <div className="feature-row">
              <div className="feature-item">
                <h3 className="feature-title">Design Excellence</h3>
                <p className="feature-description">
                  Crafted with precision, our designs elevate your brand's
                  online presence effortlessly.
                </p>
              </div>
              <div className="feature-item">
                <h3 className="feature-title">User Focused</h3>
                <p className="feature-description">
                  We prioritize user experience, ensuring seamless navigation
                  and engagement for every visitor.
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="about-image"></div>
      </div>
    </section>
  );
};

export default AboutSection;
