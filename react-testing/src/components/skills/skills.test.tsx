import { screen, render, logRoles } from "@testing-library/react";
import Skills from "./skills";

describe("Skill", () => {
  const skills = ["HTML", "CSS", "JS"];
  test("renders correctly", () => {
    render(<Skills skills={skills} />);
    const ulElement = screen.getByRole("list");
    expect(ulElement).toBeInTheDocument();
  });

  test("renders a list of skills", () => {
    render(<Skills skills={skills} />);
    const liElement = screen.getAllByRole("listitem");
    expect(liElement).toHaveLength(skills.length);
  });

  test("renders login button", () => {
    render(<Skills skills={skills} />);
    const loginButton = screen.getByRole("button", {
      name: "Login",
    });
    expect(loginButton).toBeInTheDocument();
  });

  test("renders learning button", () => {
    render(<Skills skills={skills} />);
    const learningButton = screen.queryByRole("button", {
      name: "Start learning",
    });
    expect(learningButton).not.toBeInTheDocument();
  });

  test("start learning button is displayed eventually", async () => {
    const view = render(<Skills skills={skills} />);
    logRoles(view.container);
    const learningButton = await screen.findByRole(
      "button",
      {
        name: "Start learning",
      },
      {
        timeout: 2000,
      }
    );
    expect(learningButton).toBeInTheDocument();
  });
});
