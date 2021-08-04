import React, { useEffect, useState } from "react";
import "./App.css";
import { getProductsService } from "./services/products";

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
      {"Number of products:" + products?.length}
      {JSON.stringify(products)}
    </div>
  );
}

export default App;
