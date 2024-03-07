import React, { useState, useEffect } from "react";
import Card from "./CardComponent";
const URL = "http://localhost:5173/src/data/products.json";
const placeHolder =
  "https://media.istockphoto.com/id/1147544807/vector/thumbnail-image-vector-graphic.jpg?s=612x612&w=0&k=20&c=rnCKVbdxqkjlcs3xH87-9gocETqpspHFXu5dIGB4wuM=";
const ProductList = () => {
  const [products, setProducts] = useState([]);

  useEffect(() => {
    fetch("https://api.escuelajs.co/api/v1/products/")
      .then((response) => response.json())
      .then((data) => setProducts(data))
      .catch((error) => console.error("Error fetching data: ", error));
  }, []);

  return (
    <div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {products.map((product) => (
          <Card
            key={product.id}
            title={product?.title || "No Name"}
            image={product?.images[0] || placeHolder}
            price={product.price}
          />
        ))}
      </div>
    </div>
  );
};

export default ProductList;
