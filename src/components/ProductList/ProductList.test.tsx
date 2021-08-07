import React from "react";
import { render, screen } from "@testing-library/react";
import ProductList from "./index";

const items = [
  [
    "KIOMI Uhr navy",
    "4054789817584",
    "male",
    "14.95 EUR",
    "29.95 EUR",
    "https://mosaic01.ztat.net/vgs/media/large/K4/45/1M/A0/6K/11/K4451MA06-K11@6.jpg",
  ],
  [
    "Weekday THURSDAY Jeans Slim Fit black",
    "2001008772980",
    "female",
    "39.95 EUR",
    "39.95 EUR",
    "https://mosaic01.ztat.net/vgs/media/large/WE/B2/1N/00/HQ/11/WEB21N00H-Q11@12.4.jpg",
  ],
];
describe("ProductList component", () => {
  test("should render Products", () => {
    render(<ProductList items={items} />);
    const list = screen.getByTestId("product-card-list");
    expect(list).toBeTruthy();
    expect(list.children.length).toBe(2);
  });
});
