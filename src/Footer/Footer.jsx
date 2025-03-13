import React from "react";
import "./Footer.css";
import facebookIcon from "../assets/facebook.png";
import instagramIcon from "../assets/instagram.png";
import twitterIcon from "../assets/x.png";
import linkedinIcon from "../assets/linkedin.png";
import youtubeIcon from "../assets/youtube.png";

const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer-content">
        <div className="newsletter">
          <div className="footer-logo">PortfolioMY.</div>
          <p className="newsletter-description">
            Subscribe to our newsletter for the latest updates on features and
            releases.
          </p>
          <form className="newsletter-form">
            <div className="newsletter-input-group">
              <label htmlFor="email" className="visually-hidden">
                Your email here
              </label>
              <input
                type="email"
                id="email"
                className="newsletter-input"
                placeholder="Your email here"
              />
              <button type="submit" className="newsletter-submit">
                Join
              </button>
            </div>
            <p className="newsletter-disclaimer">
              By subscribing, you consent to our Privacy Policy and agree to
              receive updates.
            </p>
          </form>
        </div>
        <div className="footer-links">
          <div className="footer-link-column">
            <h3 className="footer-link-heading">Helpful Links</h3>
            <ul className="footer-link-list">
              <li>
                <a href="#" className="footer-link">
                  About Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Contact Us
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Support Center
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Blog Posts
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Careers
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-link-column">
            <h3 className="footer-link-heading">Connect With Us</h3>
            <ul className="footer-link-list">
              <li>
                <a href="#" className="footer-link">
                  Newsletter
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Events
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Community
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  Resources
                </a>
              </li>
              <li>
                <a href="#" className="footer-link">
                  FAQs
                </a>
              </li>
            </ul>
          </div>
          <div className="footer-social-column">
            <h3 className="footer-social-heading">Stay Connected</h3>
            <ul className="footer-social-list">
              <li className="footer-social-item">
                <img
                  src={facebookIcon}
                  alt="Facebook"
                  className="footer-social-icon"
                />
                <span className="footer-social-name">Facebook</span>
              </li>
              <li className="footer-social-item">
                <img
                  src={instagramIcon}
                  alt="Instagram"
                  className="footer-social-icon"
                />
                <span className="footer-social-name">Instagram</span>
              </li>
              <li className="footer-social-item">
                <img
                  src={twitterIcon}
                  alt="Twitter"
                  className="footer-social-icon"
                />
                <span className="footer-social-name">X</span>
              </li>
              <li className="footer-social-item">
                <img
                  src={linkedinIcon}
                  alt="LinkedIn"
                  className="footer-social-icon"
                />
                <span className="footer-social-name">LinkedIn</span>
              </li>
              <li className="footer-social-item">
                <img
                  src={youtubeIcon}
                  alt="YouTube"
                  className="footer-social-icon"
                />
                <span className="footer-social-name">YouTube</span>
              </li>
            </ul>
          </div>
        </div>
      </div>
      <div className="footer-bottom">
        <div className="footer-bottom-content">
          <p className="footer-copyright">© 2024. All rights reserved.</p>
          <div className="footer-legal-links">
            <a href="#" className="footer-legal-link">
              Privacy Policy
            </a>
            <a href="#" className="footer-legal-link">
              Terms of Service
            </a>
            <a href="#" className="footer-legal-link">
              Cookie Settings
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
