import React, { useEffect } from 'react';
import { personalInfo } from '../data/data';
import ContactForm from '../components/ContactForm';
import './Contact.css';

const Contact: React.FC = () => {
  useEffect(() => {
    document.title = 'Mike Hallai - Contact';
  }, []);

  return (
    <div className="contact-page">
      <div className="container">
        <div className="contact-header">
          <h1>Connect with me</h1>
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

          {/* Contact Form */}
          <div className="contact-form-section">
            <h2>Send a Message</h2>
            <ContactForm />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Contact; 