import React from "react";
import profilePic from "../assets/images/David.jpg";

function Hero() {
  const phoneNumber = "254110437317";
  const cvLink =
    "https://docs.google.com/document/d/1HeUkUyCHvEjSgx53fz3AZNvYr9_80LTCv5gKLx1WoBk/edit?tab=t.0";

  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img
          src={profilePic}
          alt="David Kariuki Karumba"
          className="profile-pic"
        />
        <h1>Hello, I'm David Kariuki Karumba</h1>
        <p>A passionate full-stack software engineer.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View My Work
          </a>
          <a href={`tel:+${phoneNumber}`} className="btn secondary">
            Call David
          </a>
          <a
            href={`https://wa.me/${phoneNumber}`}
            target="_blank"
            rel="noopener noreferrer"
            className="btn primary"
          >
            WhatsApp Me
          </a>
          <a
            href={cvLink}
            target="_blank"
            rel="noopener noreferrer"
            className="btn secondary"
          >
            Download CV
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
