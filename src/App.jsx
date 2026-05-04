import React, { useState } from 'react';
import ProjectList from './components/ProjectList';
import ProjectForm from './components/Projectform';
import SearchBar from './components/SearchBar';
import './App.css';

function App() {
  const [projects, setProjects] = useState([
    { id: 1, title: "Web Design", category: "UI/UX", description: "Modern landing page" },
    { id: 2, title: "Mobile App", category: "Development", description: "Fitness tracking app" }
  ]);
  const [searchTerm, setSearchTerm] = useState("");

  // Function to add a new project dynamically
  const addProject = (newProject) => {
    setProjects([...projects, { ...newProject, id: Date.now() }]);
  };

  // Logic for filtering projects
  const filteredProjects = projects.filter(project =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
    project.category.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="container">
      <h1>Creative Agency Portfolio</h1>
      <SearchBar setSearchTerm={setSearchTerm} />
      <ProjectForm addProject={addProject} />
      <ProjectList projects={filteredProjects} />
    </div>
  );
}

export default App;