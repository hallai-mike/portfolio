import React, { useEffect } from 'react';
import { projects } from '../data/data';
import ProjectList from '../components/ProjectList';
import './Projects.css';

const Projects: React.FC = () => {
  useEffect(() => {
    document.title = 'Mike Hallai - Projects';
  }, []);

  return (
    <div className="projects-page">
      <div className="container">
        <div className="projects-header">
          <h1>Projects</h1>
          <p>These are side projects built outside of my full-time job</p>
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