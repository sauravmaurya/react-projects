import { render, screen } from "@testing-library/react";
import Test3 from "./test3";

test("Test3 renders correctly", () => {
  render(<Test3 />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});
