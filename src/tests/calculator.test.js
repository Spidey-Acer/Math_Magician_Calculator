import React from "react";
import { render, screen, fireEvent } from "@testing-library/react";
import Calculator from "../Calculator";

test("simulates button click", () => {
  render(<Calculator />);
  const buttonElement = screen.getByText("7");
  fireEvent.click(buttonElement);
  const displayElement = screen.getByTestId("display");
  expect(displayElement).toHaveTextContent("7");
});

test("renders the Calculator component", () => {
  render(<Calculator />);
  const calculatorElement = screen.getByTestId("calculator");
  expect(calculatorElement).toMatchSnapshot();
});
