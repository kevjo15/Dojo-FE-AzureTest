import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

const handleClickMock = jest.fn();

describe("Button component", () => {
  it("renders with given content", () => {
    render(<Button onClick={handleClickMock}>Click Me</Button>);

    const button = screen.getByText("Click Me");

    expect(button).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    render(<Button onClick={handleClickMock}>Click Me</Button>);

    const button = screen.getByText("Click Me");
    button.click();

    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });

  it("fails", () => {
    render(<Button onClick={handleClickMock}>Click Me</Button>);

    const button = screen.queryByText("non existing");

    expect(button).toBeInTheDocument();
  });
});
