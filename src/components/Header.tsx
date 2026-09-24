import React from "react";
import { Link } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
export default function Header() {
  return (
    <>
      <a className="skip-link" href="#main">
        Skip to content
      </a>
      <header className="site-header page-width">
        <Link className="wordmark" to="/">
          Mike Hallai
        </Link>
        <div className="header-actions">
          <nav aria-label="Main navigation">
            <Link to="/projects">Work</Link>
            <Link to="/#about">About</Link>
            <Link to="/contact">
              Let’s talk <span aria-hidden="true">↗</span>
            </Link>
          </nav>
          <ThemeToggle />
        </div>
      </header>
    </>
  );
}
