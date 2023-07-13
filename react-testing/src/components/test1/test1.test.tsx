import { render, screen } from "@testing-library/react";
import Test1 from "./test1";

test("Test1 renders correctly", () => {
  render(<Test1 />);
  const textElement = screen.getByText(/hello/i);
  expect(textElement).toBeInTheDocument();
});
