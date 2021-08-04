import Papa from "papaparse";

export const getProductsService = async () => {
  const response = await fetch("data/products.csv");
  const reader = response?.body?.getReader();
  const result = await reader?.read();
  const decoder = new TextDecoder("utf-8");
  const csv = await decoder.decode(result?.value);
  const products = Papa.parse(csv);
  products.data.shift();
  return products;
};
