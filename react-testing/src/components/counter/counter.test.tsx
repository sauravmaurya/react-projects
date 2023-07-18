import { render, screen } from "@testing-library/react";
import Counter from "./counter";

test("renders login button", () => {
  render(<Counter />);
  const counterButton = screen.getByRole("button", {
    name: "Increment",
  });
  expect(counterButton).toBeInTheDocument();
});
