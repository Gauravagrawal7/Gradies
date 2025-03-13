import React from "react";
import "./TeamSection.css";
import linkedinIcon from "../assets/Linkedin1.png";
import twitterIcon from "../assets/X1.png";
import facebookIcon from "../assets/facebook1.png";
import prevIcon from "../assets/prev-arrow.png";
import nextIcon from "../assets/next-arrow.png";

const TeamMember = ({ image, name, title, bio, socialLinks }) => (
  <div className="team-member-card">
    {image ? (
      <img src={image} alt={name} className="member-image" />
    ) : (
      <div className="member-image"></div>
    )}
    <div className="member-info">
      <h3 className="member-name">{name}</h3>
      <p className="member-title">{title}</p>
      <p className="member-bio">{bio}</p>
    </div>
    <div className="member-social">
      {socialLinks.map((link, index) => (
        <a
          key={index}
          href={link.url}
          target="_blank"
          rel="noopener noreferrer"
        >
          <img src={link.icon} alt={link.name} className="social-icon" />
        </a>
      ))}
    </div>
  </div>
);

const TeamSection = () => {
  const teamMembers = [
    {
      name: "Alice Johnson",
      title: "Project Manager",
      bio: "Alice ensures projects run smoothly and meets client expectations with her exceptional organizational skills.",
      socialLinks: [
        { name: "LinkedIn", icon: linkedinIcon, url: "#" },
        { name: "Twitter", icon: twitterIcon, url: "#" },
        { name: "Facebook", icon: facebookIcon, url: "#" },
      ],
    },
    {
      name: "Bob Smith",
      title: "Lead Developer",
      bio: "Bob brings innovative solutions to life with his extensive programming expertise and creative problem-solving.",
      socialLinks: [
        { name: "LinkedIn", icon: linkedinIcon, url: "#" },
        { name: "Twitter", icon: twitterIcon, url: "#" },
        { name: "Facebook", icon: facebookIcon, url: "#" },
      ],
    },
    {
      name: "Catherine Lee",
      title: "UX Designer",
      bio: "Catherine crafts user experiences that are both intuitive and visually appealing for our clients.",
      socialLinks: [
        { name: "LinkedIn", icon: linkedinIcon, url: "#" },
        { name: "Twitter", icon: twitterIcon, url: "#" },
        { name: "Facebook", icon: facebookIcon, url: "#" },
      ],
    },
    {
      name: "Alice Johnson",
      title: "Project Manager",
      bio: "Alice ensures projects run smoothly and meets client expectations with her exceptional organizational skills.",
      socialLinks: [
        { name: "LinkedIn", icon: linkedinIcon, url: "#" },
        { name: "Twitter", icon: twitterIcon, url: "#" },
        { name: "Facebook", icon: facebookIcon, url: "#" },
      ],
    },
    {
      name: "Bob Smith",
      title: "Lead Developer",
      bio: "Bob brings innovative solutions to life with his extensive programming expertise and creative problem-solving.",
      socialLinks: [
        { name: "LinkedIn", icon: linkedinIcon, url: "#" },
        { name: "Twitter", icon: twitterIcon, url: "#" },
        { name: "Facebook", icon: facebookIcon, url: "#" },
      ],
    },
    {
      name: "Catherine Lee",
      title: "UX Designer",
      bio: "Catherine crafts user experiences that are both intuitive and visually appealing for our clients.",
      socialLinks: [
        { name: "LinkedIn", icon: linkedinIcon, url: "#" },
        { name: "Twitter", icon: twitterIcon, url: "#" },
        { name: "Facebook", icon: facebookIcon, url: "#" },
      ],
    },
  ];

  return (
    <section className="team-section">
      <div className="team-title">
        <div className="team-tagline">Meet</div>
        <div className="team-heading-wrapper">
          <h2 className="team-heading">Our Team</h2>
          <p className="team-description">
            Dedicated professionals committed to excellence and innovation.
          </p>
        </div>
      </div>
      <div className="team-members">
        <div className="team-grid">
          {teamMembers.map((member, index) => (
            <TeamMember key={index} {...member} />
          ))}
        </div>
        <div className="team-navigation">
          <div className="team-dots">
            {[...Array(6)].map((_, i) => (
              <div key={i} className={i === 0 ? "dot-active" : "dot"}></div>
            ))}
          </div>
          <div className="team-nav-buttons">
            <button className="team-nav-button">
              <img src={prevIcon} alt="Previous" />
            </button>
            <button className="team-nav-button">
              <img src={nextIcon} alt="Next" />
            </button>
          </div>
        </div>
      </div>
      <div className="hiring-section">
        <div className="hiring-content">
          <div className="hiring-text">
            <h3 className="hiring-heading">We're hiring!</h3>
            <p className="hiring-description">
              Looking for passionate individuals to join our team.
            </p>
          </div>
          <div className="hiring-action">
            <button className="hiring-button">Open positions</button>
          </div>
        </div>
        <div className="hiring-image"></div>
      </div>
    </section>
  );
};

export default TeamSection;
