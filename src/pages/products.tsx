import React, { useState } from "react";
import Header from "../components/Header";
import ProductList from "../components/ProductList";
import SearchBox from "../components/SearchBox";

export interface ProductsProps {
  items: any[];
}

const Products: React.FC<ProductsProps> = ({ items }) => {
  const [filteredProducts, setFilteredProducts] = useState<any[]>();

  const searchProducts = (searchText: string) => {
    if (searchText.trim() === "") {
      setFilteredProducts(items);
    } else {
      const filteredProducts = items.filter((item) =>
        item[0].toLowerCase().includes(searchText)
      );
      setFilteredProducts(filteredProducts);
    }
  };

  return (
    <div>
      <Header />
      <SearchBox searchProducts={searchProducts} />
      <ProductList
        items={filteredProducts?.length ? filteredProducts : items}
      />
    </div>
  );
};

export default Products;
