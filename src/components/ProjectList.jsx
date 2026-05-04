 import React from 'react';

const ProjectList = ({ projects }) => {
  return (
    <div className="project-list-items">
      {projects.map((project, index) => (
        <div key={index} className="project-item">
          {/* The square box with 'X' from the mockup */}
          <div className="icon-container">X</div>
          
          <div className="project-details">
            <h3 className="project-title">{project.title}</h3>
            <p className="project-description">{project.description}</p>
          </div>
        </div>
      ))}
    </div>
  );
};

export default ProjectList;