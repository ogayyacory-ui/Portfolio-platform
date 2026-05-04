 import React from 'react';

function ProjectList({ projects }) {
  // We must RETURN the JSX for it to show up on the screen
  return (
    <div className="project-list">
      {projects.map((project) => (
        <div key={project.id} className="project-card">
          {/* The square placeholder from your mockup */}
          <div className="placeholder-box">X</div>
          
          <div className="project-info">
            <h3>{project.title}</h3>
            <p>{project.category}</p>
          </div>
        </div>
      ))}
    </div>
  );
}

export default ProjectList;