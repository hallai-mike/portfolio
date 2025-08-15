import React from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/sampleData';
import './ProjectDetail.css';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#4CAF50';
      case 'in-progress':
        return '#FF9800';
      case 'planned':
        return '#2196F3';
      default:
        return '#757575';
    }
  };

  const formatDate = (dateString: string) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long'
    });
  };

  if (!project) {
    return (
      <div className="project-detail-page">
        <div className="container">
          <div className="not-found">
            <h1>Project Not Found</h1>
            <p>The project you're looking for doesn't exist.</p>
            <Link to="/projects" className="btn btn-primary">
              Back to Projects
            </Link>
          </div>
        </div>
      </div>
    );
  }

  return (
    <div className="project-detail-page">
      <div className="container">
        {/* Back Button */}
        <div className="back-button">
          <Link to="/projects" className="back-link">
            ← Back to Projects
          </Link>
        </div>

        {/* Project Header */}
        <div className="project-header">
          <div className="project-title-section">
            <h1>{project.title}</h1>
            <div 
              className="project-status-badge"
              style={{ backgroundColor: getStatusColor(project.status) }}
            >
              {project.status.replace('-', ' ')}
            </div>
          </div>
          <p className="project-date-range">
            {formatDate(project.dateRange.start)} - {project.dateRange.end ? formatDate(project.dateRange.end) : 'Present'}
          </p>
        </div>

        {/* Project Images */}
        {project.images.length > 0 && (
          <div className="project-images">
            <h2>Project Screenshots</h2>
            <div className="image-gallery">
              {project.images.map((image, index) => (
                <div key={index} className="image-container">
                  <img src={image} alt={`${project.title} screenshot ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        )}

        {/* Project Details */}
        <div className="project-details">
          <div className="details-grid">
            <div className="description-section">
              <h2>Description</h2>
              <p>{project.description}</p>
            </div>

            <div className="technologies-section">
              <h2>Technologies Used</h2>
              <div className="technologies-list">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>

          {/* Detailed Project Information */}
          <div className="detailed-description">
            <h2>Project Details</h2>
            <div className="details-sections">
              {project.details.inspiration && (
                <div className="detail-section">
                  <h3>Inspiration</h3>
                  <p>{project.details.inspiration}</p>
                </div>
              )}
              
              {project.details.idea && (
                <div className="detail-section">
                  <h3>The Idea</h3>
                  <p>{project.details.idea}</p>
                </div>
              )}
              
              {project.details.process && (
                <div className="detail-section">
                  <h3>Development Process</h3>
                  <p>{project.details.process}</p>
                </div>
              )}
              
              {project.details.design && (
                <div className="detail-section">
                  <h3>Design Approach</h3>
                  <p>{project.details.design}</p>
                </div>
              )}
              
              {project.details.challenges && (
                <div className="detail-section">
                  <h3>Challenges & Solutions</h3>
                  <p>{project.details.challenges}</p>
                </div>
              )}
              
              {project.details.results && (
                <div className="detail-section">
                  <h3>Results & Impact</h3>
                  <p>{project.details.results}</p>
                </div>
              )}
            </div>
          </div>
        </div>

        {/* Project Links */}
        <div className="project-links-section">
          <h2>Project Links</h2>
          <div className="project-links">
            {project.githubUrl && (
              <a href={project.githubUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                View on GitHub
              </a>
            )}
            {project.liveUrl && (
              <a href={project.liveUrl} target="_blank" rel="noopener noreferrer" className="project-link-btn">
                Live Demo
              </a>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default ProjectDetail; 