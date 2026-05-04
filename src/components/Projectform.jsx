 import React, { useState } from 'react';

function ProjectForm({ addProject }) {
  const [formData, setFormData] = useState({ title: '', category: '', description: '' });

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.title || !formData.category) return;
    addProject(formData);
    setFormData({ title: '', category: '', description: '' }); // Reset form
  };

  return (
    <form onSubmit={handleSubmit} className="project-form">
      <h3>Add New Project</h3>
      <input 
        type="text" placeholder="Project Title" 
        value={formData.title}
        onChange={(e) => setFormData({...formData, title: e.target.value})}
      />
      <input 
        type="text" placeholder="Category" 
        value={formData.category}
        onChange={(e) => setFormData({...formData, category: e.target.value})}
      />
      <button type="submit">Add Project</button>
    </form>
  );
}

export default ProjectForm;