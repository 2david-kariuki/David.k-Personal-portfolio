import React from "react";

function Navbar() {
  return (
    <nav className="navbar">
      <div className="nav-logo">My Portfolio</div>
      <ul className="nav-links">
        <li>
          <a href="#hero">Home</a>
        </li>
        <li>
          <a href="#about">About</a>
        </li>
        <li>
          <a href="#projects">Projects</a>
        </li>
        <li>
          <a href="#contact">Contact</a>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
