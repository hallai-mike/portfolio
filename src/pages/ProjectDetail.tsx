import React, { useState, useEffect, useCallback } from 'react';
import { useParams, Link } from 'react-router-dom';
import { projects } from '../data/data';
import './ProjectDetail.css';

const ProjectDetail: React.FC = () => {
  const { id } = useParams<{ id: string }>();
  const project = projects.find(p => p.id === id);

  const [selectedImageIndex, setSelectedImageIndex] = useState<number | null>(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  const getStatusColor = (status: string) => {
    switch (status) {
      case 'completed':
        return '#4CAF50';
      case 'in-progress':
        return '#FF9800';
      case 'on-hold':
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

  const openModal = useCallback((index: number) => {
    setSelectedImageIndex(index);
    setIsModalOpen(true);
  }, []);

  const closeModal = useCallback(() => {
    setIsModalOpen(false);
    setSelectedImageIndex(null);
  }, []);

  const navigateImage = useCallback((direction: 'prev' | 'next') => {
    if (!project || selectedImageIndex === null) return;

    const totalImages = project.images.length;
    let newIndex: number;

    if (direction === 'prev') {
      newIndex = selectedImageIndex === 0 ? totalImages - 1 : selectedImageIndex - 1;
    } else {
      newIndex = selectedImageIndex === totalImages - 1 ? 0 : selectedImageIndex + 1;
    }

    setSelectedImageIndex(newIndex);
  }, [project, selectedImageIndex]);

  // Keyboard navigation
  useEffect(() => {
    const handleKeyDown = (event: KeyboardEvent) => {
      if (!isModalOpen) return;

      switch (event.key) {
        case 'Escape':
          closeModal();
          break;
        case 'ArrowLeft':
          event.preventDefault();
          navigateImage('prev');
          break;
        case 'ArrowRight':
          event.preventDefault();
          navigateImage('next');
          break;
      }
    };

    document.addEventListener('keydown', handleKeyDown);
    return () => document.removeEventListener('keydown', handleKeyDown);
  }, [isModalOpen, closeModal, navigateImage]);

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

        {/* Project Details */}
        <div className="project-details">
          <div className="details-grid">
            <div className="description-section">
              <p>{project.description}</p>
            </div>

            <div className="technologies-section">
              <div className="technologies-list">
                {project.technologies.map((tech) => (
                  <span key={tech} className="tech-badge">{tech}</span>
                ))}
              </div>
            </div>
          </div>
        </div>

        {/* Project Images */}
        {project.images.length > 0 && (
          <div className="project-images">
            <div className="image-gallery">
              {project.images.map((image, index) => (
                <img
                  key={index}
                  src={image}
                  alt={`${project.title} screenshot ${index + 1}`}
                  onClick={() => openModal(index)}
                />
              ))}
            </div>
          </div>
        )}

          {/* Detailed Project Information */}
          <div className="detailed-description">
            <div className="details-sections">
              {project.details.role && (
                <div className="detail-section">
                  <h3>My Role</h3>
                  <p>{project.details.role}</p>
                </div>
              )}

              {project.details.painPoint && (
                <div className="detail-section">
                  <h3>Pain Point</h3>
                  <p>{project.details.painPoint}</p>
                </div>
              )}
              
              {project.details.idea && (
                <div className="detail-section">
                  <h3>The Idea</h3>
                  <p>{project.details.idea}</p>
                </div>
              )}
              
              {project.details.curiosity && (
                <div className="detail-section">
                  <h3>What Sparked My Curiosity</h3>
                  <p>{project.details.curiosity}</p>
                </div>
              )}
              
              {project.details.learnings && (
                <div className="detail-section">
                  <h3>Key Learnings</h3>
                  <p>{project.details.learnings}</p>
                </div>
              )}
              
              {project.details.challenges && (
                <div className="detail-section">
                  <h3>Challenges & Solutions</h3>
                  <p>{project.details.challenges}</p>
                </div>
              )}
              
              {project.details.impact && (
                <div className="detail-section">
                  <h3>Impact</h3>
                  <p>{project.details.impact}</p>
                </div>
              )}
            </div>
          </div>

        {/* Project Links */}
        {(project.githubUrl || project.liveUrl) && (
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
        )}
      </div>

      {/* Image Modal */}
      {isModalOpen && selectedImageIndex !== null && (
        <div className="modal-overlay" onClick={closeModal}>
          <div className="modal-content" onClick={(e) => e.stopPropagation()}>
            <button className="modal-close" onClick={closeModal}>
              ×
            </button>
            <button className="modal-nav modal-prev" onClick={() => navigateImage('prev')}>
              ‹
            </button>
            <button className="modal-nav modal-next" onClick={() => navigateImage('next')}>
              ›
            </button>
            <img
              src={project.images[selectedImageIndex]}
              alt={`${project.title} screenshot ${selectedImageIndex + 1}`}
              className="modal-image"
            />
            <div className="modal-counter">
              {selectedImageIndex + 1} / {project.images.length}
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default ProjectDetail; 