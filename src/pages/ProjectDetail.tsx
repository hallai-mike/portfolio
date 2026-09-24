import React, { useEffect, useRef, useState } from "react";
import { useParams, Link } from "react-router-dom";
import { projects } from "../data/data";
import { stories } from "../data/stories";
export default function ProjectDetail() {
  const { id } = useParams();
  const project = projects.find((p) => p.id === id);
  const [selected, setSelected] = useState(0);
  const dialog = useRef<HTMLDialogElement>(null);
  useEffect(() => {
    document.title = `${project?.title || "Project not found"} — Mike Hallai`;
  }, [project]);
  useEffect(() => {
    const node = dialog.current;
    return () => {
      node?.close();
      document.body.style.overflow = "";
    };
  }, [id]);
  if (!project)
    return (
      <section className="page-width detail-page">
        <h1>Project not found.</h1>
        <Link to="/projects">Explore all projects ↗</Link>
      </section>
    );
  const story = stories[project.id];
  const next = projects[(projects.indexOf(project) + 1) % projects.length];
  const close = () => {
    dialog.current?.close();
    document.body.style.overflow = "";
  };
  return (
    <section className="page-width detail-page">
      <Link className="text-link" to="/projects">
        ← All projects
      </Link>
      <div className="detail-heading">
        <span className="eyebrow">
          {project.appStoreUrl
            ? "LIVE ON THE APP STORE"
            : project.status === "on-hold"
              ? "EXPLORATION / ON HOLD"
              : "SELECTED WORK"}{" "}
          / {project.dateRange.start}
          {project.dateRange.end ? ` — ${project.dateRange.end}` : ""}
        </span>
        <h1>{project.title}</h1>
        <p>{project.description}</p>
        <div className="detail-links">
          {project.appStoreUrl && (
            <a
              className="solid-link"
              href={project.appStoreUrl}
              target="_blank"
              rel="noreferrer"
            >
              View on the App Store ↗
            </a>
          )}
          {project.marketingUrl && (
            <a
              className="solid-link"
              href={project.marketingUrl}
              target="_blank"
              rel="noreferrer"
            >
              Visit the marketing site ↗
            </a>
          )}
          {project.liveUrl && (
            <a
              className="solid-link"
              href={project.liveUrl}
              target="_blank"
              rel="noreferrer"
            >
              Try the app ↗
            </a>
          )}
          {project.githubUrl && (
            <a className="text-link" href={project.githubUrl}>
              GitHub ↗
            </a>
          )}
        </div>
      </div>
      <div className="story-grid">
        <aside>
          <span className="eyebrow">MY ROLE</span>
          <p>{project.details.role}</p>
          <span className="eyebrow">BUILT WITH</span>
          <p>{project.technologies.join(" · ")}</p>
        </aside>
        <div>
          <h2>The idea</h2>
          <p>{story.overview}</p>
        </div>
        <div>
          <h2>Behind the build</h2>
          <p>{story.story}</p>
        </div>
      </div>
      <div className="section-rule eyebrow">
        <span>A CLOSER LOOK</span>
        <span>SELECT AN IMAGE TO EXPLORE</span>
      </div>
      <div className="screenshot-gallery">
        {project.images.map((src, i) => (
          <button
            key={src}
            onClick={() => {
              setSelected(i);
              dialog.current?.showModal();
              document.body.style.overflow = "hidden";
            }}
            aria-label={`Enlarge ${project.title} screenshot ${i + 1}`}
          >
            <img
              src={src}
              alt={`${project.title} screenshot ${i + 1}`}
              loading="lazy"
            />
          </button>
        ))}
      </div>
      <Link className="next-project" to={`/projects/${next.id}`}>
        <span className="eyebrow">NEXT PROJECT</span>
        <h2>{next.title} ↗</h2>
      </Link>
      <dialog
        ref={dialog}
        className="image-dialog"
        aria-label={`${project.title} screenshots`}
        onClose={() => {
          document.body.style.overflow = "";
        }}
        onClick={(e) => {
          if (e.target === e.currentTarget) close();
        }}
        onKeyDown={(e) => {
          if (e.key === "ArrowRight")
            setSelected((i) => (i + 1) % project.images.length);
          if (e.key === "ArrowLeft")
            setSelected(
              (i) => (i + project.images.length - 1) % project.images.length,
            );
        }}
      >
        <div className="dialog-controls">
          <button
            onClick={() =>
              setSelected(
                (i) => (i + project.images.length - 1) % project.images.length,
              )
            }
            aria-label="Previous image"
          >
            ←
          </button>
          <span>
            {selected + 1} / {project.images.length}
          </span>
          <button
            onClick={() => setSelected((i) => (i + 1) % project.images.length)}
            aria-label="Next image"
          >
            →
          </button>
          <button onClick={close} aria-label="Close image">
            Close ×
          </button>
        </div>
        <img
          src={project.images[selected]}
          alt={`${project.title} screenshot ${selected + 1}`}
        />
      </dialog>
    </section>
  );
}
