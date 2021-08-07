import React from "react";
import { render, screen } from "@testing-library/react";
import SearchBox from "./index";

describe("SearchBox component", () => {
  test("should render search input box", () => {
    let searchProducts = jest.fn();
    render(<SearchBox searchProducts={searchProducts} />);
    const inputEl = screen.getByTestId("search-input");
    expect(inputEl).toBeInTheDocument();
  });
  test("should render search button", () => {
    let searchProducts = jest.fn();
    render(<SearchBox searchProducts={searchProducts} />);
    const searchButton = screen.getByTestId("search-button");
    expect(searchButton).toBeInTheDocument();
  });
});
