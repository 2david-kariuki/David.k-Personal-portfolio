import React from "react";

function Projects() {
  const projects = [
    {
      title: "Agri-Super-App",
      liveLink: "https://agri-super-app-frontend.onrender.com/",
      githubLink: "https://github.com/2david-kariuki/agri-super-app-frontend",
      description:
        "A front-end application to help farmers manage their agricultural needs. I was responsible for the UI, components, and API requests.",
    },
    {
      title: "Recipe App (Group Project)",
      githubLink: "https://github.com/KenRobertOchieng/RECIPE-APP-",
      description:
        "A collaborative full-stack application that allows users to search for, view, and save their favorite recipes. My focus was on building the user-facing front-end with React and integrating the API.",
    },
    {
      title: "Pizza API Challenge",
      githubLink: "https://github.com/2david-kariuki/pizza-api-challenge",
      description:
        "A back-end service providing a RESTful API for a pizza ordering system, built with Python and Flask. This project showcases my understanding of database management and API design.",
    },
    {
      title: "Ramen Rating App",
      liveLink: "https://2david-kariuki.github.io/ramen-rating-app/",
      githubLink: "https://github.com/2david-kariuki/ramen-rating-app/",
      description:
        "A front-end application that allows users to rate and review different ramen dishes. I focused on building a clean user interface and implemented dynamic features to handle user input.",
    },
    {
      title: "Late Show API Challenge",
      githubLink: "https://github.com/2david-kariuki/late-show-api-challenge",
      description:
        "A back-end API built with Python and Flask to manage data for a late-night talk show. This project helped me practice building a robust and well-documented API.",
    },
    {
      title: "Expense Tracker",
      githubLink: "https://github.com/2david-kariuki/EXPENSE-TRACKER",
      description:
        "A full-stack application for tracking personal expenses. This project allowed me to practice full-stack development by handling both the front-end display and back-end logic for data management.",
    },
    {
      title: "Vet Vaccination",
      githubLink: "https://github.com/2david-kariuki/vet_vaccination",
      description:
        "A full-stack application for managing veterinary vaccination records. It demonstrates my ability to create a functional system from front-end to back-end with database integration.",
    },
    {
      title: "Baakery Project Portfolio",
      githubLink: "https://github.com/2david-kariuki/Baakery-Project-Portfolio",
      description:
        "A front-end project to showcase my skills in building a professional portfolio for a bakery using HTML, CSS, and JavaScript. It demonstrates my foundational skills in web development.",
    },
    {
      title: "Photography Project",
      githubLink: "https://github.com/2david-kariuki/photography-project",
      description:
        "A front-end project to create a photography portfolio, focusing on clean design and responsive layout using HTML, CSS, and JavaScript.",
    },
  ];

  return (
    <section id="projects" className="projects">
      <h2>My Projects</h2>
      <div className="project-grid">
        {projects.map((project, index) => (
          <div key={index} className="project-card">
            <h3>{project.title}</h3>
            <p>{project.description}</p>
            <div className="project-links">
              {project.liveLink && (
                <a
                  href={project.liveLink}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="btn"
                >
                  Live Demo
                </a>
              )}
              <a
                href={project.githubLink}
                target="_blank"
                rel="noopener noreferrer"
                className="btn"
              >
                GitHub
              </a>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Projects;
