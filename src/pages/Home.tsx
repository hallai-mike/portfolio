import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { personalInfo, projects, certifications } from '../data/data';
import ProjectList from '../components/ProjectList';
import './Home.css';

const Home: React.FC = () => {
  const recentProjects = projects.slice(0, 4);

  useEffect(() => {
    document.title = 'Mike Hallai';
  }, []);

  return (
    <div className="home">
      {/* Hero Section */}
      <section className="hero">
        <div className="hero-content">
          <div className="hero-profile">
            <div className="hero-image">
              <img src={`${process.env.PUBLIC_URL}/headshot.png`} alt="Profile" className="profile-pic" />
            </div>
            <div className="hero-text">
              <h1 className="hero-title">{personalInfo.name}</h1>
              <h2 className="hero-subtitle">{personalInfo.title}</h2>
              <p className="hero-description">{personalInfo.about}</p>
              <div className="hero-buttons">
                <Link to="/contact" className="btn btn-primary">
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
          <ProjectList
            projects={recentProjects}
            showAllTechnologies={false}
            showAdditionalLinks={false}
            showSearch={false}
          />
          <div className="view-all-projects">
            <Link to="/projects" className="btn btn-outline">
              View All Projects
            </Link>
          </div>
        </div>
      </section>

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