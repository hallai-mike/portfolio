import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Project } from '../types';
import { getStatusColor, formatDate } from '../utils/projectUtils';
import './ProjectList.css';

interface ProjectListProps {
  projects: Project[];
  showAllTechnologies?: boolean;
  showAdditionalLinks?: boolean;
  showSearch?: boolean;
  className?: string;
}

const ProjectList: React.FC<ProjectListProps> = ({
  projects,
  showAllTechnologies = true,
  showAdditionalLinks = false,
  showSearch = false,
  className = ''
}) => {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredProjects = showSearch ? projects.filter(project => {
    return project.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
           project.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
           project.technologies.some(tech => tech.toLowerCase().includes(searchTerm.toLowerCase()));
  }) : projects;

  const renderTechnologies = (technologies: string[]) => {
    if (showAllTechnologies) {
      return technologies.map((tech) => (
        <span key={tech} className="tech-tag">{tech}</span>
      ));
    } else {
      const displayedTechs = technologies.slice(0, 3);
      const remainingCount = technologies.length - 3;

      return (
        <>
          {displayedTechs.map((tech) => (
            <span key={tech} className="tech-tag">{tech}</span>
          ))}
          {remainingCount > 0 && (
            <span className="tech-tag">+{remainingCount} more</span>
          )}
        </>
      );
    }
  };

  const renderProjectLinks = (project: Project) => {
    if (showAdditionalLinks) {
      return (
        <div className="project-links">
          <Link to={`/projects/${project.id}`} className="project-link">
            View Details
          </Link>
          {project.githubUrl && (
            <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              GitHub
            </a>
          )}
          {project.liveUrl && (
            <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link">
              Live Demo
            </a>
          )}
        </div>
      );
    } else {
      return (
        <Link to={`/projects/${project.id}`} className="project-link">
          View Details
        </Link>
      );
    }
  };

  return (
    <div className={`project-list ${className}`}>
      {showSearch && (
        <div className="filters">
          <div className="search-box">
            <input
              type="text"
              placeholder="Search projects..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="search-input"
            />
          </div>
        </div>
      )}

      <div className="projects-grid">
        {filteredProjects.map((project) => (
          <div key={project.id} className="project-card">
            <div className="project-image">
              <img src={project.images[0]} alt={project.title} />
              <div
                className="project-status"
                style={{ backgroundColor: getStatusColor(project.status) }}
              >
                {project.status.replace('-', ' ')}
              </div>
            </div>
            <div className="project-content">
              <h3>{project.title}</h3>
              <p className="project-date">
                {formatDate(project.dateRange.start)} - {project.dateRange.end ? formatDate(project.dateRange.end) : 'Present'}
              </p>
              <p className="project-description">{project.description}</p>
              <div className="project-technologies">
                {renderTechnologies(project.technologies)}
              </div>
              {renderProjectLinks(project)}
            </div>
          </div>
        ))}
      </div>

      {showSearch && filteredProjects.length === 0 && (
        <div className="no-projects">
          <h3>No projects found</h3>
          <p>Try adjusting your search terms.</p>
        </div>
      )}
    </div>
  );
};

export default ProjectList;
