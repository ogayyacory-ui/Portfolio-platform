 import React, { useState } from 'react';
import './App.css';

// Importing the individual components you created
import ProjectForm from './components/ProjectForm';
import SearchBar from './components/SearchBar';
import ProjectList from './components/ProjectList';

function App() {
  // 1. State for the master list of projects
  // Initialized with the three default projects seen in the mockup
  const [projects, setProjects] = useState([
    { id: 1, title: 'Web Design', description: 'Description of the project' },
    { id: 2, title: 'Mobile App', description: 'Description of the project' },
    { id: 3, title: 'Project 3', description: 'Description of the project' },
  ]);

  // 2. State for the search filter
  const [searchTerm, setSearchTerm] = useState('');

  // 3. Logic to add a new project
  const addProject = (newProject) => {
    // Giving the new project a unique ID
    const projectWithId = { ...newProject, id: Date.now() };
    // Adding the new project to the top of the list
    setProjects([projectWithId, ...projects]);
  };

  // 4. Logic to filter projects based on the SearchBar input
  const filteredProjects = projects.filter((project) =>
    project.title.toLowerCase().includes(searchTerm.toLowerCase())
  );

  return (
    <div className="App">
      {/* The main white container defined in your CSS */}
      <div className="main-page">
        
        {/* Header Section */}
        <header className="app-header">
          <h1>Creative Agency Portfolio</h1>
        </header>

        <main>
          {/* Task: A form that allows users to add new projects dynamically */}
          <ProjectForm onAddProject={addProject} />

          {/* Section for the Search and the List */}
          <section className="project-list-section">
            
            {/* Task: A search feature for dynamically filtering projects */}
            <SearchBar 
              searchTerm={searchTerm} 
              onSearchChange={setSearchTerm} 
            />

            {/* Task: A landing page displaying a list of projects */}
            <ProjectList projects={filteredProjects} />
            
          </section>
        </main>

      </div>
    </div>
  );
}

export default App;