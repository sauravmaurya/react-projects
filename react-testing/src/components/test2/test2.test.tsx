import { render, screen } from "@testing-library/react";
import Test2 from "./test2";

describe("Test2", () => {
  test("renders correctly", () => {
    render(<Test2 />);
    const textElement = screen.getByText(/hello/i);
    expect(textElement).toBeInTheDocument();
  });

  describe("nested", () => {
    test("renders correctly with name", () => {
      render(<Test2 name="Saurav" />);
      const textElement = screen.getByText(/hello/i);
      expect(textElement).toBeInTheDocument();
    });
  });

  // only- runs only below test
  // test.only("Only Test2 renders correctly with name", () => {
  //     render(<Test2 name="Saurav" />);
  //     const textElement = screen.getByText(/hello/i);
  //     expect(textElement).toBeInTheDocument();
  //   });

  // skip- skips below test
  // test.skip("Skip Test2 renders correctly with name", () => {
  //   render(<Test2 name="Saurav" />);
  //   const textElement = screen.getByText(/hello/i);
  //   expect(textElement).toBeInTheDocument();
  // });
});
