import React, { useState, useEffect } from "react";
import styles from "./Projects.module.css";
import { ProjectCard } from "./ProjectCard";

export const Projects = () => {
  const [projects, setProjects] = useState([]);

  useEffect(() => {
    // Define your API endpoint URL
    const apiUrl = "https://backend-portfolio-dkgi.onrender.com/api/projects";

    // Fetch project data from the API
    fetch(apiUrl)
      .then((response) => response.json())
      .then((data) => {
        // Once data is fetched, update the state with the fetched projects
        setProjects(data);
      })
      .catch((error) => {
        console.error("Error fetching projects:", error);
      });
  }, []); // Empty dependency array ensures this effect runs only once after the component mounts

  return (
    <section className={styles.container} id="projects">
      <h2 className={styles.title}>Projects</h2>
      <div className={styles.projects}>
        {projects.map((project, index) => (
          <ProjectCard key={index} project={project} />
        ))}
      </div>
    </section>
  );
};
