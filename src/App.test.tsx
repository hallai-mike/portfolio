import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";
import { projects } from "./data/data";

beforeEach(() => {
  window.history.replaceState({}, "", "/");
  window.scrollTo = jest.fn();
  window.matchMedia = jest
    .fn()
    .mockReturnValue({
      matches: false,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    });
  window.IntersectionObserver = jest
    .fn()
    .mockImplementation(() => ({ observe: jest.fn(), disconnect: jest.fn() }));
});

test("revealing each app restores its links and artwork", () => {
  const apps = projects.filter((p) => p.stealth);
  apps.forEach((p) => { p.stealth = false; });
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "Why isn’t there an app for this?",
  );
  const storeLinks = screen.getAllByRole("link", {
    name: /View on the App Store/,
  });
  expect(storeLinks[1]).toHaveAttribute(
    "href",
    "https://apps.apple.com/us/app/comic-dreamer-ai-art/id6760437741",
  );
  expect(storeLinks[0]).toHaveAttribute(
    "href",
    "https://apps.apple.com/us/app/cartscore-receipt-scanner/id6771398455",
  );
  fireEvent.click(screen.getByRole("button", { name: /Shuffle a dream/ }));
  expect(screen.getByText("Dream artwork 2 of 2")).toBeInTheDocument();
  apps.forEach((p) => { p.stealth = true; });
});

test("collection searches projects and opens the concise case study", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("link", { name: "Work" }));
  fireEvent.change(screen.getByRole("searchbox"), {
    target: { value: "LucidQuery" },
  });
  expect(
    screen.getByRole("heading", { name: "LucidQuery" }),
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("heading", { name: "FiTrac" }),
  ).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("link", { name: /LucidQuery/ }));
  expect(screen.getByRole("heading", { name: "The idea" })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Behind the build" }),
  ).toBeInTheDocument();
  expect(
    screen.getAllByRole("button", { name: /Enlarge LucidQuery screenshot/ }),
  ).toHaveLength(4);
});


test("stealth apps show anonymous covers and stay out of the collection", () => {
  render(<App />);
  expect(screen.getAllByRole("heading", { name: "Under wraps." })).toHaveLength(2);
  expect(screen.queryByText("Cart Score")).not.toBeInTheDocument();
  expect(screen.queryByText("Comic Dreamer")).not.toBeInTheDocument();
  expect(screen.queryByRole("link", { name: /App Store/ })).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("link", { name: "Work" }));
  expect(screen.queryByText("Cart Score")).not.toBeInTheDocument();
  expect(screen.queryByText("Comic Dreamer")).not.toBeInTheDocument();
});

test.each(["cart-score", "comic-dreamer"])("stealth detail route %s hides the case study", (id) => {
  window.history.replaceState({}, "", `/projects/${id}`);
  render(<App />);
  expect(screen.getByRole("heading", { name: "Project not found." })).toBeInTheDocument();
  expect(screen.queryByRole("heading", { name: "The idea" })).not.toBeInTheDocument();
});
