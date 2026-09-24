import React from "react";
import { fireEvent, render, screen } from "@testing-library/react";
import ThemeToggle from "./ThemeToggle";

beforeEach(() => {
  localStorage.clear();
  delete document.documentElement.dataset.theme;
  window.matchMedia = jest
    .fn()
    .mockReturnValue({
      matches: true,
      addEventListener: jest.fn(),
      removeEventListener: jest.fn(),
    });
});

test("defaults to the system theme and persists a manual choice across remounts", () => {
  const first = render(<ThemeToggle />);
  expect(document.documentElement.dataset.theme).toBe("dark");
  fireEvent.click(screen.getByRole("button", { name: "Dark mode" }));
  expect(document.documentElement.dataset.theme).toBe("light");
  expect(localStorage.getItem("portfolio-theme")).toBe("light");
  first.unmount();
  render(<ThemeToggle />);
  expect(screen.getByRole("button", { name: "Dark mode" })).toHaveAttribute(
    "aria-pressed",
    "false",
  );
  expect(document.documentElement.dataset.theme).toBe("light");
});

test("toggle still works when saving preferences is blocked", () => {
  const save = jest
    .spyOn(Storage.prototype, "setItem")
    .mockImplementation(() => {
      throw new Error("Storage disabled");
    });
  render(<ThemeToggle />);
  fireEvent.click(screen.getByRole("button", { name: "Dark mode" }));
  expect(document.documentElement.dataset.theme).toBe("light");
  save.mockRestore();
});
