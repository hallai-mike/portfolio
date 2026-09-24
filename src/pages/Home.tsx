import React, { useEffect } from "react";
import { Link } from "react-router-dom";
import { personalInfo, projects, certifications } from "../data/data";
import Exhibit from "../components/Exhibit";
export default function Home() {
  useEffect(() => {
    document.title = "Mike Hallai — Thoughtful digital products";
  }, []);
  const featured = ["cart-score", "comic-dreamer", "lucid-query"];
  return (
    <>
      <section className="hero page-width">
        <div className="hero-kicker eyebrow">
          <span>INDEPENDENT PROJECTS / SELECTED WORK</span>
          <span>DESIGN + ENGINEERING</span>
        </div>
        <h1>
          I build smart, intuitive
          <br className="desktop-break" /> apps people <em>love to use.</em>
        </h1>
        <div className="hero-bottom">
          <p>
            From AI tools to mobile and web projects,
            <br />I turn ideas into polished products.
          </p>
          <a className="text-link" href="#work">
            Step inside the work <span>↓</span>
          </a>
        </div>
      </section>
      <section
        id="work"
        className="page-width work-section"
        aria-label="Selected work"
      >
        <div className="section-rule eyebrow">
          <span>A FEW THINGS I’VE BUILT</span>
          <span>01 — 03</span>
        </div>
        {featured.map((id, i) => (
          <Exhibit
            key={id}
            project={projects.find((p) => p.id === id)!}
            index={i}
          />
        ))}
      </section>
      <section className="page-width archive">
        <div className="section-rule eyebrow">
          <span>MORE EXPLORATIONS</span>
          <Link to="/projects">ALL PROJECTS ↗</Link>
        </div>
        {projects
          .filter((p) => !featured.includes(p.id))
          .map((p) => (
            <Link className="archive-row" key={p.id} to={`/projects/${p.id}`}>
              <span>{p.dateRange.start.slice(-4)}</span>
              <div>
                <h3>{p.title}</h3>
                <p>{p.description}</p>
              </div>
              <span>↗</span>
            </Link>
          ))}
      </section>
      <section id="about" className="about page-width">
        <div>
          <span className="eyebrow">THE PERSON BEHIND THE PROJECTS</span>
          <h2>
            Curiosity in.
            <br />
            <em>Good things out.</em>
          </h2>
          <img
            src={`${process.env.PUBLIC_URL}/headshot.png`}
            alt="Mike Hallai"
            width="110"
            height="110"
          />
        </div>
        <div>
          <p className="about-lead">{personalInfo.about}</p>
          <p>
            These are the things I build outside of my full-time work. A
            collection of questions, experiments, and ideas that became real
            products.
          </p>
          <details>
            <summary>
              Credentials & certifications <span>＋</span>
            </summary>
            <ul>
              {certifications.map((c) => (
                <li key={c.id}>
                  {c.name}
                  <span>{c.issuer}</span>
                </li>
              ))}
            </ul>
          </details>
        </div>
      </section>
    </>
  );
}
