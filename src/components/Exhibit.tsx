import React, { useEffect, useRef, useState } from "react";
import { Link } from "react-router-dom";
import { Project } from "../types";

export default function Exhibit({
  project,
  index,
}: {
  project: Project;
  index: number;
}) {
  const ref = useRef<HTMLElement>(null);
  const [dream, setDream] = useState(0);
  const comic = project.id === "comic-dreamer";
  const cart = project.id === "cart-score";
  const lucid = project.id === "lucid-query";
  useEffect(() => {
    const node = ref.current!;
    const preference = window.matchMedia("(prefers-reduced-motion: reduce)");
    let frame = 0;
    let visible = false;
    const paint = () => {
      frame = 0;
      if (!visible || preference.matches) return;
      const bounds = node.getBoundingClientRect();
      const progress = Math.max(
        -1,
        Math.min(
          1,
          (window.innerHeight / 2 - (bounds.top + bounds.height / 2)) /
            (window.innerHeight * 0.72),
        ),
      );
      node.style.setProperty("--travel", progress.toFixed(4));
    };
    const schedule = () => {
      if (visible && !preference.matches && !frame)
        frame = requestAnimationFrame(paint);
    };
    const observer = new IntersectionObserver(
      ([entry]) => {
        visible = entry.isIntersecting;
        if (visible) schedule();
      },
      { rootMargin: "150px" },
    );
    const reset = () => {
      node.style.setProperty("--travel", "0");
      schedule();
    };
    observer.observe(node);
    window.addEventListener("scroll", schedule, { passive: true });
    window.addEventListener("resize", schedule);
    preference.addEventListener("change", reset);
    return () => {
      observer.disconnect();
      cancelAnimationFrame(frame);
      window.removeEventListener("scroll", schedule);
      window.removeEventListener("resize", schedule);
      preference.removeEventListener("change", reset);
    };
  }, []);
  const screenshot = comic
    ? `${process.env.PUBLIC_URL}/project-images/comic-dreamer/${dream ? "9-remix-result" : "6-result-1"}-preview.jpg`
    : cart
      ? project.images[0]
      : project.images[2] || project.images[0];
  return (
    <article
      ref={ref}
      className={`exhibit ${comic ? "dream" : cart ? "cart" : "lucid"}`}
      aria-labelledby={`title-${project.id}`}
    >
      <div className="exhibit-copy">
        <span className="eyebrow">
          {String(index + 1).padStart(2, "0")} /{" "}
          {project.appStoreUrl ? "LIVE ON THE APP STORE" : "SELECTED WORK"}
        </span>
        <h2 id={`title-${project.id}`}>{project.title}</h2>
        <p>{project.description}</p>
        <span className="exhibit-category">
          {project.technologies.slice(0, 3).join(" / ")}
        </span>
        <Link className="text-link" to={`/projects/${project.id}`}>
          Explore project <span>↗</span>
        </Link>
        {project.appStoreUrl && (
          <a
            className="store-link"
            href={project.appStoreUrl}
            target="_blank"
            rel="noreferrer"
          >
            View on the App Store ↗
          </a>
        )}
        {project.marketingUrl && (
          <a
            className="store-link"
            href={project.marketingUrl}
            target="_blank"
            rel="noreferrer"
          >
            Visit marketing site ↗
          </a>
        )}
      </div>
      <div className="portal-area">
        <div
          className={`portal ${dream ? "alternate-dream" : ""}`}
          role="img"
          aria-label={`${project.title}: a layered exhibit with app screenshots`}
        >
          {comic && (
            <button
              className="dream-shuffle"
              onClick={() => setDream((d) => 1 - d)}
            >
              Shuffle a dream <span aria-hidden="true">↻</span>
            </button>
          )}
          <div className="scene-window" aria-hidden="true">
            <div
              className="portal-backdrop"
              style={
                {
                  "--dream-art": `url("${process.env.PUBLIC_URL}/art/dream-world.jpg")`,
                  "--cart-art": `url("${process.env.PUBLIC_URL}/art/cartscore-background.jpg")`,
                  "--lucid-art": `url("${process.env.PUBLIC_URL}/art/lucidquery-background.jpg")`,
                } as React.CSSProperties
              }
            />
            <div className="portal-glow" />
          </div>
          <div className="scene-type" aria-hidden="true">
            {comic
              ? "Dream it."
              : cart
                ? "A fresh\nperspective."
                : "Custom RAG\nfor your files."}
          </div>
          {lucid && (
            <>
              <div className="floating-paper paper-one" aria-hidden="true">
                <span>RESEARCH NOTES</span>
                <i />
                <i />
                <i />
                <div className="paper-chart" />
              </div>
              <div className="floating-paper paper-two" aria-hidden="true">
                <span>A CLEARER PICTURE</span>
                <i />
                <i />
                <i />
              </div>
            </>
          )}
          {cart && (
            <>
              <img
                className="cart-app-icon"
                src={`${process.env.PUBLIC_URL}/project-images/cart-score/icon.jpg`}
                alt=""
                loading="lazy"
              />
              <img
                className="cart-history-preview"
                src={project.images[2]}
                alt=""
                loading="lazy"
              />
            </>
          )}
          {lucid ? (
            <img
              className="scene-screen wide-screen"
              src={screenshot}
              alt=""
              loading="lazy"
              decoding="async"
            />
          ) : (
            <div className="scene-screen phone-screen">
              <img
                src={screenshot}
                alt=""
                width={598}
                height={1300}
                loading={index === 0 ? "eager" : "lazy"}
                decoding="async"
              />
            </div>
          )}
          {comic && (
            <img
              className="comic-panel"
              src={`${process.env.PUBLIC_URL}/project-images/comic-dreamer/${dream ? "6-result-1" : "9-remix-result"}-preview.jpg`}
              alt=""
              loading="lazy"
            />
          )}
          <div className="portal-caption" aria-hidden="true">
            <span>
              {comic
                ? "IMAGINATION, ILLUSTRATED"
                : cart
                  ? "SHOPPING, UNDERSTOOD"
                  : "INFORMATION, CONNECTED"}
            </span>
            <span>↓</span>
          </div>
        </div>
        <div className="exhibit-footnote">
          <span>SCROLL TO DISCOVER</span>
        </div>
        {comic && (
          <span className="sr-only" aria-live="polite">
            Dream artwork {dream + 1} of 2
          </span>
        )}
      </div>
    </article>
  );
}
