import React, { useEffect } from "react";
import ContactForm from "../components/ContactForm";
import { personalInfo } from "../data/data";
export default function Contact() {
  useEffect(() => {
    document.title = "Let’s talk — Mike Hallai";
  }, []);
  return (
    <section className="page-width contact-page">
      <span className="eyebrow">GOOD THINGS START WITH A CONVERSATION</span>
      <h1>
        What’s on
        <br />
        <em>your mind?</em>
      </h1>
      <div className="contact-layout">
        <div>
          <p>
            I’m always interested in new opportunities and collaborations. Tell
            me what you’re thinking.
          </p>
          <a
            className="text-link"
            href={personalInfo.linkedin}
            target="_blank"
            rel="noreferrer"
          >
            LinkedIn ↗
          </a>
          <a
            className="text-link"
            href={personalInfo.github}
            target="_blank"
            rel="noreferrer"
          >
            GitHub ↗
          </a>
        </div>
        <ContactForm />
      </div>
    </section>
  );
}
