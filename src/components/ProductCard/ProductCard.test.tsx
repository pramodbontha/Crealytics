import React from "react";
import { render, screen } from "@testing-library/react";
import ProductCard from "./index";

const item = {
  title: "KIOMI Uhr navy",
  gtin: "4054789817584",
  gender: "male",
  salePrice: "14.95 EUR",
  price: "29.95 EUR",
  imageLink:
    "https://mosaic01.ztat.net/vgs/media/large/K4/45/1M/A0/6K/11/K4451MA06-K11@6.jpg",
};

describe("ProductCard component", () => {
  test("renders title", () => {
    render(
      <ProductCard
        title={item.title}
        gtin={item.gtin}
        gender={item.gender}
        salePrice={item.salePrice}
        price={item.price}
        imageLink={item.imageLink}
      />
    );
    const linkElement = screen.getByText(/KIOMI Uhr navy/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders gtin", () => {
    render(
      <ProductCard
        title={item.title}
        gtin={item.gtin}
        gender={item.gender}
        salePrice={item.salePrice}
        price={item.price}
        imageLink={item.imageLink}
      />
    );
    const linkElement = screen.getByText(/4054789817584/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders gender", () => {
    render(
      <ProductCard
        title={item.title}
        gtin={item.gtin}
        gender={item.gender}
        salePrice={item.salePrice}
        price={item.price}
        imageLink={item.imageLink}
      />
    );
    const linkElement = screen.getByText(/male/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders sale price", () => {
    render(
      <ProductCard
        title={item.title}
        gtin={item.gtin}
        gender={item.gender}
        salePrice={item.salePrice}
        price={item.price}
        imageLink={item.imageLink}
      />
    );
    const linkElement = screen.getByText(/14.95 EUR/i);
    expect(linkElement).toBeInTheDocument();
  });

  test("renders price", () => {
    render(
      <ProductCard
        title={item.title}
        gtin={item.gtin}
        gender={item.gender}
        salePrice={item.salePrice}
        price={item.price}
        imageLink={item.imageLink}
      />
    );
    const linkElement = screen.getByText(/29.95 EUR/i);
    expect(linkElement).toBeInTheDocument();
  });
});
