import React from "react";
import "./ProcessSection.css";
import learnMoreIcon from "../assets/chevron-right.png";

const ProcessStep = ({ image, title, description }) => (
  <div className="process-step">
    <div className="step-image"></div>
    <div className="step-content">
      <h3 className="step-title">{title}</h3>
      <p className="step-description">{description}</p>
    </div>
  </div>
);

const ProcessSection = () => {
  const steps = [
    {
      title: "Step 1: Initial Consultation",
      description:
        "We begin with a detailed discussion to understand your needs.",
    },
    {
      title: "Step 2: Planning and Strategy",
      description: "Next, we create a tailored plan to achieve your goals.",
    },
    {
      title: "Step 3: Execution and Delivery",
      description: "Our team executes the plan with precision and care.",
    },
  ];

  return (
    <section className="process-section">
      <div className="process-title">
        <div className="process-tagline">Process</div>
        <div className="process-heading-wrapper">
          <h2 className="process-heading">
            <span>Understanding Our </span>
            <br />
            <span style={{ color: "rgba(255,119,0,1)" }}>Seamless</span>
            <span> Workflow </span>
          </h2>
          <p className="process-description">
            Our process is designed for simplicity and efficiency. Each step is
            carefully crafted to ensure a smooth experience from start to
            finish.
          </p>
        </div>
      </div>
      <div className="process-content">
        <div className="process-steps">
          {steps.map((step, index) => (
            <ProcessStep key={index} {...step} />
          ))}
        </div>
      </div>
      <div className="process-actions">
        <button className="process-start-btn">Start</button>
        <button className="process-learn-more-btn">
          <span className="process-learn-more-text">Learn More</span>
          <img
            src={learnMoreIcon}
            alt="Learn More"
            className="process-learn-more-icon"
          />
        </button>
      </div>
    </section>
  );
};

export default ProcessSection;
