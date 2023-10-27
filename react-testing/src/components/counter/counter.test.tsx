import { render, screen } from "@testing-library/react";
import userEvent from "@testing-library/user-event";
import Counter from "./counter";

describe("Counter", () => {
  test("renders correctly", () => {
    render(<Counter />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toBeInTheDocument();
    const counterButton = screen.getByRole("button", {
      name: "Increment",
    });
    expect(counterButton).toBeInTheDocument();
  });

  test("renders heading as 0", () => {
    render(<Counter />);
    const headingElement = screen.getByRole("heading");
    expect(headingElement).toHaveTextContent("0");
  });

  //   test("renders a count of 1 after clicking the increment button", async () => {
  //     // userEvent.setup();
  //     render(<Counter />);
  //     const counterButton = screen.getByRole("button", {
  //       name: "Increment",
  //     });
  //     await userEvent.click(counterButton);
  //     const countElement = screen.getByRole("heading");
  //     expect(countElement).toHaveTextContent("1");
  //   });

  //   test("renders a count of 10 after clicking the set button", async () => {
  //     // userEvent.setup();
  //     render(<Counter />);
  //     const amountInput = screen.getByRole("spinbutton");
  //     await userEvent.type(amountInput, "10");
  //     expect(amountInput).toHaveValue("10");

  //     const setButton = screen.getByRole("button", {
  //       name: "Set",
  //     });
  //     await userEvent.click(setButton);
  //     const countElement = screen.getByRole("heading");
  //     expect(countElement).toHaveTextContent("10");
  //   });

  //   test("elements are focused in the right order", async () => {
  //     // userEvent.setup();
  //     render(<Counter />);
  //     const amountInput = screen.getByRole("spinbutton");
  //     const setButton = screen.getByRole("button", {
  //       name: "Set",
  //     });
  //     const incrementButton = screen.getByRole("button", {
  //       name: "Increment",
  //     });
  //     await userEvent.tab();
  //     expect(incrementButton).toHaveFocus();
  //     await userEvent.tab();
  //     expect(amountInput).toHaveFocus();
  //     await userEvent.tab();
  //     expect(setButton).toHaveFocus();
  //   });
});
