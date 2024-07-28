import React, { useState, useEffect } from 'react';
import './css_files/project.css'; // Import CSS for styling

const ProjectList = () => {
  const [projects, setProjects] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  useEffect(() => {
    const fetchProjects = async () => {
      try {
        const response = await fetch('/projects.json');
        if (!response.ok) {
          throw new Error('Network response was not ok');
        }
        const data = await response.json();
        setProjects(data);
        setLoading(false);
      } catch (err) {
        setError(err);
        setLoading(false);
      }
    };

    fetchProjects();
  }, []);

  if (loading) {
    return <div>Loading...</div>;
  }

  if (error) {
    return <div>Error: {error.message}</div>;
  }

  return (
    <div className="project-grid">
      {projects.map(project => (
        <div key={project.project_id} className="project-card">
          <img src={project.project_img} alt={project.title} className="project-image" />
          <h3 className="project-title">{project.title}</h3>
          <p className="project-description">{project.description}</p>
          <p className="project-languages">
            Languages: {project.projectlanguages.join(', ')}
          </p>
          <a href={project.prj_link} target="_blank" rel="noopener noreferrer" className="project-link">
            View Project
          </a>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;
