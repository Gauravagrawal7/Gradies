import React, { useState } from "react";
import "./TestimonialsSection.css";
import prevIcon from "../assets/prev-icon.png";
import nextIcon from "../assets/next-icon.png";

const TestimonialCard = ({ quote, name, title, avatar }) => (
  <div className="testimonial-column">
    <div className="testimonial-wrapper">
      <blockquote className="testimonial-quote">{quote}</blockquote>
      <div className="testimonial-avatar">
        {avatar ? (
          <img src={avatar} alt={name} className="avatar-image" />
        ) : (
          <div className="avatar-image"></div>
        )}
        <div className="avatar-content">
          <div className="avatar-name">{name}</div>
          <div className="avatar-title">{title}</div>
        </div>
      </div>
    </div>
  </div>
);

const TestimonialsSection = () => {
  const testimonials = [
    {
      quote:
        "This service transformed my business! The results were beyond my expectations.",
      name: "John Doe",
      title: "CEO, Tech Innovations",
    },
    {
      quote:
        "A game changer in the industry! I couldn't be happier with the support provided.",
      name: "Jane Smith",
      title: "Founder, Creative Solutions",
      avatar: "",
    },
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % testimonials.length);
  };

  const handlePrev = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? testimonials.length - 1 : prevIndex - 1
    );
  };

  return (
    <section className="testimonials-section">
      <div className="testimonials-content">
        <div className="testimonials-container">
          <TestimonialCard {...testimonials[currentIndex]} />
        </div>
        <button className="testimonial-nav-prev" onClick={handlePrev}>
          <img src={prevIcon} alt="Previous" />
        </button>
        <button className="testimonial-nav-next" onClick={handleNext}>
          <img src={nextIcon} alt="Next" />
        </button>
        <div className="testimonial-dots">
          {testimonials.map((_, index) => (
            <div
              key={index}
              className={index === currentIndex ? "dot-active" : "dot"}
            ></div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
