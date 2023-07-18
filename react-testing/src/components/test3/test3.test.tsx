import { render, screen } from "@testing-library/react";
import Test3 from "./test3";

describe("Test3", () => {
  test("Test3 renders correctly", () => {
    render(<Test3 />);

    const headingElement1 = screen.getByRole("heading", {
      //   name: "Inquiry Form",
      level: 1,
    });
    expect(headingElement1).toBeInTheDocument();

    const headingElement2 = screen.getByRole("heading", {
      //   name: "Enter Details",
      level: 2,
    });
    expect(headingElement2).toBeInTheDocument();

    const nameElement = screen.getByRole("textbox", {
      name: "Enter Name",
    });
    expect(nameElement).toBeInTheDocument();

    const nameElementByPlaceholder = screen.getByPlaceholderText("Name");
    expect(nameElementByPlaceholder).toBeInTheDocument();

    const nameElementByDisplayValue = screen.getByDisplayValue("Saurav");
    expect(nameElementByDisplayValue).toBeInTheDocument();

    const paraElement = screen.getByText("All fields are mandatory");
    expect(paraElement).toBeInTheDocument();

    const closeElement = screen.getByTitle("close");
    expect(closeElement).toBeInTheDocument();

    const customElement = screen.getByTestId("custom-element");
    expect(customElement).toBeInTheDocument();

    const emailElement = screen.getByLabelText("Enter Email", {
      selector: "input",
    });
    expect(emailElement).toBeInTheDocument();

    const addressElement = screen.getByRole("textbox", {
      name: "Enter Address",
    });
    expect(addressElement).toBeInTheDocument();
  });
});
