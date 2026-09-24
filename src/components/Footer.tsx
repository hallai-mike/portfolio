import React from "react";
import { Link } from "react-router-dom";
import { personalInfo } from "../data/data";
export default function Footer() {
  return (
    <footer className="site-footer page-width">
      <span className="eyebrow">HAVE SOMETHING IN MIND?</span>
      <Link className="footer-cta" to="/contact">
        Let’s build something.<span>↗</span>
      </Link>
      <div className="footer-bottom">
        <span>© {new Date().getFullYear()} Mike Hallai</span>
        <div>
          <a href={personalInfo.github} target="_blank" rel="noreferrer">
            GitHub ↗
          </a>
          <a href={personalInfo.linkedin} target="_blank" rel="noreferrer">
            LinkedIn ↗
          </a>
          <a href="#top">Back to top ↑</a>
        </div>
      </div>
    </footer>
  );
}
