import React from "react";
import dropdownIcon from "../assets/dropdown-icon.png";
import "./Header.css";

const Header = () => {
  return (
    <header className="header">
      <nav className="nav-menu">
        <div className="nav-links">
          <div className="logo">PortfolioMY.</div>
          <a href="#home" className="nav-link">
            Home Page
          </a>
          <a href="#about" className="nav-link">
            About Us
          </a>
          <a href="#services" className="nav-link">
            Services
          </a>
          <div className="nav-link-dropdown">
            <span className="nav-link">More Links</span>
            <img
              src={dropdownIcon}
              alt="Dropdown Icon"
              className="dropdown-icon"
            />
          </div>
        </div>
      </nav>
      <div className="header-actions">
        <button className="btn-secondary">Consultation</button>
        <button className="btn-primary">Contact Us</button>
      </div>
    </header>
  );
};

export default Header;
