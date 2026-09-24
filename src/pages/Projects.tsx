import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { projects } from "../data/data";
export default function Projects() {
  const [query, setQuery] = useState("");
  useEffect(() => {
    document.title = "Work — Mike Hallai";
  }, []);
  const filtered = projects.filter((p) =>
    `${p.title} ${p.description} ${p.technologies.join(" ")}`
      .toLowerCase()
      .includes(query.toLowerCase()),
  );
  return (
    <section className="page-width work-index">
      <span className="eyebrow">THE COLLECTION / 2020 — TODAY</span>
      <h1>Ideas made real.</h1>
      <div className="index-intro">
        <p>
          Independent projects. Practical problems.
          <br />A healthy amount of curiosity.
        </p>
        <label className="search-label">
          Find a project
          <input
            type="search"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by name or technology"
          />
        </label>
      </div>
      <div className="project-grid">
        {filtered.map((p, i) => (
          <article className="project-tile" key={p.id}>
            <Link to={`/projects/${p.id}`}>
              <div className={`tile-image tile-${p.id}`}>
                <img
                  src={
                    p.images[
                      p.id === "comic-dreamer"
                        ? 5
                        : p.id === "fitrac" || p.id === "cravey"
                          ? 1
                          : 0
                    ]
                  }
                  alt={`${p.title} preview`}
                  loading="lazy"
                />
              </div>
              <div className="tile-title">
                <h2>{p.title}</h2>
                <span>↗</span>
              </div>
              <p>{p.description}</p>
            </Link>
            <span className="eyebrow">
              {p.appStoreUrl
                ? "LIVE ON THE APP STORE"
                : p.technologies.slice(0, 3).join(" / ")}
            </span>
          </article>
        ))}
      </div>
      {!filtered.length && (
        <p className="empty-state">
          No projects found. Try another name or technology.
        </p>
      )}
    </section>
  );
}
