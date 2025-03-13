import React from "react";
import Header from "../Header/Header";
import HeroSection from "../HeroSection/HeroSection";
import AboutSection from "../AboutSection/AboutSection";
import ServicesSection from "../ServicesSection/ServicesSection";
import AdvantagesSection from "../AdvantagesSection/AdvantagesSection";
import ProcessSection from "../ProcessSection/ProcessSection";
import TestimonialsSection from "../TestimonialsSection/TestimonialsSection";
import TeamSection from "../TeamSection/TeamSection";
import PortfolioSection from "../PortfolioSection/PortfolioSection";
import CTASection from "../CTASection/CTASection";
import AboutUsSection from "../AboutUsSection/AboutUsSection";
import Footer from "../Footer/Footer";
import "./PortfolioLanding.css";
import vectorImage from "../assets/Vector.png";
import AdVector from "../assets/AdVector.png";
import ProVector from "../assets/ProVector.png";

const PortfolioLanding = () => {
  return (
    <div className="landing-page">
      <Header />
      <main>
        <div className="hero-about-wrapper">
          <HeroSection />
          <img src={vectorImage} alt="Vector Design" className="vector-image" />
          <AboutSection />
        </div>
        <ServicesSection />
        <div>
          <AdvantagesSection />

          <img
            src={AdVector}
            alt="Vector Design"
            className="vector-divider-img section-gap"
          />

          <ProcessSection />
        </div>
        <TestimonialsSection />
        <TeamSection />
        <div>
          <PortfolioSection />
          <img src={ProVector} alt="Vector Design" className="pro-vector" />
          <CTASection />
        </div>
        <AboutUsSection />
      </main>
      <Footer />
    </div>
  );
};

export default PortfolioLanding;
