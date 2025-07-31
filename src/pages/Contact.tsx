import React from 'react';
import { personalInfo } from '../data/sampleData';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Get In Touch</h1>
          <p>I'm always interested in new opportunities and collaborations. Feel free to reach out!</p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>Contact Information</h2>
            <div className="info-cards">
              <div className="info-card">
                <h3>Address</h3>
                <p>{personalInfo.address}</p>
              </div>
              <div className="info-card">
                <h3>Email</h3>
                <a href={`mailto:${personalInfo.email}`}>{personalInfo.email}</a>
              </div>
              {personalInfo.phone && (
                <div className="info-card">
                  <h3>Phone</h3>
                  <a href={`tel:${personalInfo.phone}`}>{personalInfo.phone}</a>
                </div>
              )}
            </div>

            <div className="social-links">
              <h3>Connect with me</h3>
              <div className="social-buttons">
                {personalInfo.linkedin && (
                  <a href={personalInfo.linkedin} target="_blank" rel="noopener noreferrer" className="social-btn linkedin">
                    LinkedIn
                  </a>
                )}
                {personalInfo.github && (
                  <a href={personalInfo.github} target="_blank" rel="noopener noreferrer" className="social-btn github">
                    GitHub
                  </a>
                )}
              </div>
            </div>
          </div>

          {/* Contact Form Placeholder */}
          <div className="contact-form-section">
            <h2>Send a Message</h2>
            <div className="form-placeholder">
              <div className="placeholder-content">
                <h3>Contact Form</h3>
                <p>This is where you can add your contact form. You can integrate with services like:</p>
                <ul>
                  <li>Formspree</li>
                  <li>Netlify Forms</li>
                  <li>EmailJS</li>
                  <li>Custom backend API</li>
                </ul>
                <p>For now, you can reach me directly at <strong>{personalInfo.email}</strong></p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 