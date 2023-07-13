import { render, screen } from "@testing-library/react";
import Test2 from "./test2";

test("Test2 renders correctly", () => {
  render(<Test2 />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});

test("Test2 renders correctly with name", () => {
  render(<Test2 name="Saurav" />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});
