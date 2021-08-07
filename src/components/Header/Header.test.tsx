import React from "react";
import { render, screen } from "@testing-library/react";
import Header from "./index";

describe("Header component", () => {
  test("renders learn react link", () => {
    render(<Header />);
    const linkElement = screen.getByText(
      /Products search and filter application/i
    );
    expect(linkElement).toBeInTheDocument();
  });
});
