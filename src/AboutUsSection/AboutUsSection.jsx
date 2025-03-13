import React from "react";
import "./AboutUsSection.css";

const AboutUsSection = () => {
  return (
    <section className="about-us-section">
      <div className="about-us-content">
        <h2 className="about-us-heading">
          <span>Discover </span>
          <span style={{ color: "rgba(255,119,0,1)" }}>Our Journey</span>
          <span>: Passion, Innovation, and Commitment to Excellence </span>
        </h2>
        <p className="about-us-description">
          Founded with a vision to transform ideas into reality, our company has
          grown from humble beginnings to a leader in the industry. Our mission
          is to deliver exceptional quality and innovative solutions that
          empower our clients. We value integrity, creativity, and
          collaboration, ensuring that every project reflects our commitment to
          excellence.
        </p>
      </div>
      <div className="about-us-image"></div>
    </section>
  );
};

export default AboutUsSection;
