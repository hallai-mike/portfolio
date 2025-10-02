import React, { useState } from 'react';
import { useForm, ValidationError } from '@formspree/react';
import './ContactForm.css';

function ContactForm() {
  const [state, handleSubmit] = useForm("xnngvvav");
  const [email, setEmail] = useState('');
  const [message, setMessage] = useState('');

  const isFormValid = email.trim() !== '' && message.trim() !== '';

  if (state.succeeded) {
    return (
      <div className="form-success-message">
        Thanks for your message! I'll get back to you soon.
      </div>
    );
  }

  return (
    <form onSubmit={handleSubmit} className="contact-form">
      <div className="form-group">
        <label htmlFor="email" className="form-label">
          Email Address
        </label>
        <input
          id="email"
          type="email"
          name="email"
          className="form-input"
          placeholder="Enter your email address"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <ValidationError
          prefix="Email"
          field="email"
          errors={state.errors}
          className="validation-error"
        />
      </div>

      <div className="form-group">
        <label htmlFor="message" className="form-label">
          Message
        </label>
        <textarea
          id="message"
          name="message"
          className="form-textarea"
          placeholder="Tell me about your project or just say hello..."
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          required
        />
        <ValidationError
          prefix="Message"
          field="message"
          errors={state.errors}
          className="validation-error"
        />
      </div>

      <button
        type="submit"
        disabled={state.submitting || !isFormValid}
        className="form-submit-btn"
      >
        {state.submitting ? 'Sending...' : 'Send Message'}
      </button>
    </form>
  );
}

function App() {
  return (
    <ContactForm />
  );
}

export default App;