import "@testing-library/jest-dom";
import { render, screen } from "@testing-library/react";
import { Button } from "./Button";

const handleClickMock = jest.fn();

describe("Button component", () => {
  it("renders with given text", () => {
    render(<Button onClick={handleClickMock} text="Click Me" />);

    const button = screen.getByText("Click Me");

    expect(button).toBeInTheDocument();
  });

  it("calls onClick handler when clicked", () => {
    render(<Button onClick={handleClickMock} text="Click Me" />);

    const button = screen.getByText("Click Me");
    button.click();

    expect(handleClickMock).toHaveBeenCalledTimes(1);
  });
});
