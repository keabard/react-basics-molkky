import React from "react";
import { render, fireEvent } from "@testing-library/react";

import App from "./App";

it("displays App without crashing", () => {
  const { container } = render(<App />);
  expect(container).toBeDefined();
});

it("displays the correct score when clicking one Pin", () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText("6"));
  expect(getByText(/Score :/).textContent).toBe("Score : 6");
});

it("displays the correct score when clicking multiples Pins", () => {
  const { getByText } = render(<App />);
  fireEvent.click(getByText("5"));
  fireEvent.click(getByText("12"));
  fireEvent.click(getByText("1"));
  expect(getByText(/Score :/).textContent).toBe("Score : 3");
});
