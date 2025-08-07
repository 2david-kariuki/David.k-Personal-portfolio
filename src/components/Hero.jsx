import React from "react";
import profilePic from "../assets/images/David.jpg";

function Hero() {
  return (
    <section id="hero" className="hero">
      <div className="hero-content">
        <img
          src={profilePic}
          alt="David Kariuki Karumba"
          className="profile-pic"
        />
        <h1>Hello, I'm David .K Karumba</h1>
        <p>A passionate full-stack software engineer.</p>
        <div className="hero-buttons">
          <a href="#projects" className="btn primary">
            View My Work
          </a>
          <a
            href="https://docs.google.com/document/d/1Xy_J6bW8Y-G7gL3_y8P5A5G2xQ2z6wX2z/edit?usp=sharing"
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
