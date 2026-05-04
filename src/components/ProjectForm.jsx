 import React, { useState } from 'react';

const ProjectForm = ({ onAddProject }) => {
  const [title, setTitle] = useState('');
  const [category, setCategory] = useState('');
  const [description, setDescription] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!title || !category) return;
    onAddProject({ title, category, description });
    setTitle('');
    setCategory('');
    setDescription('');
  };

  return (
    <section className="add-project-section">
      <div className="form-group-border">
        <h2 className="section-header">Add Project</h2>
        <form onSubmit={handleSubmit}>
          <div className="form-field">
            <label>Title</label>
            <input 
              type="text" 
              placeholder="Project Title"
              value={title} 
              onChange={(e) => setTitle(e.target.value)} 
            />
          </div>
          <div className="form-field">
            <label>Category</label>
            <input 
              type="text" 
              placeholder="Category"
              value={category} 
              onChange={(e) => setCategory(e.target.value)} 
            />
          </div>
          <div className="form-field">
            <label>Description</label>
            <textarea 
              value={description} 
              onChange={(e) => setDescription(e.target.value)} 
            />
          </div>
          <div className="form-actions">
            <button type="submit" className="add-btn">Add Project</button>
          </div>
        </form>
      </div>
    </section>
  );
};

export default ProjectForm;