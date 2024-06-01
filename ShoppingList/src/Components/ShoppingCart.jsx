import axios from "axios";
import React, { useEffect, useState } from "react";
import ProductCard from "./ProductCard";

export default function ShoppingCart() {
  const [data, setData] = useState([]);

  useEffect(() => {
    getData();
  }, [data]);

  async function getData() {
    try {
      const response = await axios.get("https://fakestoreapi.com/products");
      setData(response.data);
    } catch (error) {
      console.log(error);
    }
  }

  return (
    <>
      <div className="min-h-screen  border-2 sm:grid md:grid-cols-2 lg:grid-cols-2 xl:grid-cols-3 m-auto p-4">
        {data.map((products) => (
          <ProductCard key={products.id} products={products} />
        ))}
      </div>
    </>
  );
}
