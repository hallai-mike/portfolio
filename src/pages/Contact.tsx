import React from 'react';
import { personalInfo } from '../data/sampleData';
import './Contact.css';

const Contact: React.FC = () => {
  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Connect with Me</h1>
          <p>I'm always interested in new opportunities and collaborations.<br/>Feel free to reach out!</p>
        </div>

        <div className="contact-content">
          {/* Contact Information */}
          <div className="contact-info">
            <h2>Find me on</h2>
            <div className="social-links">
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