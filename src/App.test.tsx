import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import App from "./App";

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

test("exhibits link to both shipped apps and shuffle dream artwork", () => {
  render(<App />);
  expect(screen.getByRole("heading", { level: 1 })).toHaveTextContent(
    "I build smart, intuitive apps people love to use.",
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
});

test("collection searches projects and opens the concise case study", () => {
  render(<App />);
  fireEvent.click(screen.getByRole("link", { name: "Work" }));
  fireEvent.change(screen.getByRole("searchbox"), {
    target: { value: "Cart Score" },
  });
  expect(
    screen.getByRole("heading", { name: "Cart Score" }),
  ).toBeInTheDocument();
  expect(
    screen.queryByRole("heading", { name: "FiTrac" }),
  ).not.toBeInTheDocument();
  fireEvent.click(screen.getByRole("link", { name: /Cart Score/ }));
  expect(screen.getByRole("heading", { name: "The idea" })).toBeInTheDocument();
  expect(
    screen.getByRole("heading", { name: "Behind the build" }),
  ).toBeInTheDocument();
  expect(
    screen.getAllByRole("button", { name: /Enlarge Cart Score screenshot/ }),
  ).toHaveLength(3);
});
