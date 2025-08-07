import React from "react";
import aboutImage from "../assets/images/IMG_2025DVID about.jpg"; 

function About() {
  return (
    <section id="about" className="about">
      <div className="container about-container">
        <img
          src={aboutImage}
          alt="David Karumba working"
          className="about-pic"
        />
        <div className="about-text">
          <h2>About Me</h2>
          <p>
            I am a passionate and results-driven software engineer with a strong
            foundation in full-stack development, a recent graduate of{" "}
            <strong>Moringa School</strong>. I'm proficient in{" "}
            <strong>
              Python, Flask, JavaScript, React, HTML, CSS, SQL, and PostgreSQL
            </strong>
            .
          </p>
          <p>
            I am actively seeking a software engineering internship to apply my
            skills in a professional setting, contribute to a team, and grow as
            a developer.
          </p>
        </div>
      </div>
    </section>
  );
}

export default About;
