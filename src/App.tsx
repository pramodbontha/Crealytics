import React, { useEffect, useState } from "react";
import "./App.css";
import { getProductsService } from "./services/products";
import Products from "./pages/products";

function App() {
  const [products, setProducts] = useState<any>([]);
  useEffect(() => {
    async function getProducts() {
      const response = await getProductsService();
      setProducts(response.data);
    }
    getProducts();
  }, []);
  return (
    <div>
      <Products items={products} />
    </div>
  );
}

export default App;
