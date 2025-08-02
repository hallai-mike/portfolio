import React from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, projects, certifications } from '../data/sampleData';
import './Home.css';

const Home: React.FC = () => {
  const recentProjects = projects.slice(0, 3);

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
      month: 'short'
    });
  };

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-profile">
            <div className="hero-image">
              <img src="/headshot.png" alt="Profile" className="profile-pic" />
            </div>
            <div className="hero-text">
              <h1 className="hero-title">{personalInfo.name}</h1>
              <h2 className="hero-subtitle">{personalInfo.title}</h2>
              <p className="hero-description">{personalInfo.about}</p>
              <div className="hero-buttons">
                <Link to="/projects" className="btn btn-primary">
                  View Projects
                </Link>
                <Link to="/contact" className="btn btn-secondary">
                  Get In Touch
                </Link>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Recent Projects Section */}
      <section className="recent-projects">
        <div className="container">
          <h2>Recent Projects</h2>
          <div className="projects-grid">
            {recentProjects.map((project) => (
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
                    {project.technologies.slice(0, 3).map((tech) => (
                      <span key={tech} className="tech-tag">{tech}</span>
                    ))}
                    {project.technologies.length > 3 && (
                      <span className="tech-tag">+{project.technologies.length - 3} more</span>
                    )}
                  </div>
                  <Link to={`/projects/${project.id}`} className="project-link">
                    View Details
                  </Link>
                </div>
              </div>
            ))}
          </div>
          <div className="view-all-projects">
            <Link to="/projects" className="btn btn-outline">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

      {/* Personal Info Section */}
      {/*<section className="personal-info">
        <div className="container">
          <h2>About Me</h2>
          <div className="info-grid">
            <div className="info-item">
              <h3>Contact Information</h3>
              <p><strong>Address:</strong> {personalInfo.address}</p>
              <p><strong>Email:</strong> {personalInfo.email}</p>
              {personalInfo.phone && (
                <p><strong>Phone:</strong> {personalInfo.phone}</p>
              )}
            </div>
            <div className="info-item">
              <h3>Social Links</h3>
              {personalInfo.linkedin && (
                <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-link">
                  LinkedIn
                </a>
              )}
              {personalInfo.github && (
                <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-link">
                  GitHub
                </a>
              )}
            </div>
          </div>
        </div>
      </section>*/}

      {/* Certifications Section */}
      <section className="certifications">
        <div className="container">
          <h2>Certifications</h2>
          <div className="certifications-grid">
            {certifications.map((cert) => (
              <div key={cert.id} className="certification-card">
                <h3>{cert.name}</h3>
                <p className="cert-issuer">{cert.issuer}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home; 