"use client";
import React, { useEffect, useState } from "react";

const ProductPage = async () => {
  // "use cache";

  // სერვერის მხარეს fetching:
  // const products = await fetch("https://fakestoreapi.com/products");
  // const parsedData = await products.json();

  //client-ის მხარის fetching:
  const [products, setProducts] = useState(null);

  const getData = async () => {
    const data = await fetch("https://fakestoreapi.com/products");
    const parsedData = await data.json();
    setProducts(parsedData);
  };

  useEffect(() => {
    getData();
  }, []);

  return (
    <div>
      {products?.map((p) => (
        <h2 key={p.id}>{p.title}</h2>
      ))}
    </div>
  );
};

export default ProductPage;
