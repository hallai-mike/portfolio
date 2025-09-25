import React from 'react';
import { projects } from '../data/sampleData';
import ProjectList from '../components/ProjectList';
import './Projects.css';

const Projects: React.FC = () => {

  return (
    <div className="projects-page">
      <div className="container">
        <div className="projects-header">
          <h1>Projects</h1>
        </div>

        <ProjectList
          projects={projects}
          showAllTechnologies={true}
          showAdditionalLinks={true}
          showSearch={true}
        />
      </div>
    </div>
  );
};

export default Projects; 