import React from "react";
import "./ServicesSection.css";
import icon1 from "../assets/icon1.png";
import icon2 from "../assets/icon2.png";
import icon3 from "../assets/icon3.png";
import arrowIcon1 from "../assets/arrow-icon1.png";
import arrowIcon2 from "../assets/arrow-icon2.png";
import arrowIcon3 from "../assets/arrow-icon3.png";

const ServiceCard = ({ icon, title, description, actionText, arrowIcon }) => (
  <div className="service-card">
    <div className="service-icon">
      <img src={icon} alt={title} className="service-icon-image" />
    </div>
    <h3 className="service-title">{title}</h3>
    <p className="service-description">{description}</p>
    <div className="service-action">
      <button className="service-button" aria-label={actionText}>
        <span className="service-button-text">{actionText}</span>
        <img
          src={arrowIcon}
          alt=""
          className="service-button-icon"
          aria-hidden="true"
        />
      </button>
    </div>
  </div>
);

const ServicesSection = () => {
  const services = [
    {
      icon: icon1,
      title: "Unmatched Customer Support",
      description: "Our dedicated support team is always here to assist you.",
      actionText: "Learn More",
      arrowIcon: arrowIcon1,
    },
    {
      icon: icon2,
      title: "Cutting-Edge Technology",
      description: "Stay ahead of the competition with our advanced solutions.",
      actionText: "Sign Up",
      arrowIcon: arrowIcon2,
    },
    {
      icon: icon3,
      title: "Tailored Marketing Strategies",
      description: "We create customized strategies that engage your audience.",
      actionText: "Contact",
      arrowIcon: arrowIcon3,
    },
  ];

  return (
    <section className="services-section">
      <div className="services-title">
        <h2 className="services-heading">
          <span>Discover Our Innovative</span>
          <span style={{ color: "rgba(255,119,0,1)" }}>Solutions Tailored</span>
          <span> to Your Unique Needs</span>
        </h2>
        <p className="services-description">
          We specialize in crafting bespoke websites that reflect your brand's
          identity. Our team combines creativity with technical expertise to
          deliver stunning results. Experience seamless functionality and
          captivating designs that engage your audience.
        </p>
      </div>
      <div className="services-content">
        <div className="services-row">
          {services.map((service, index) => (
            <ServiceCard key={index} {...service} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default ServicesSection;
