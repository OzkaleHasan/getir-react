import { useState, useEffect } from "react";
import Title from "components/ui/Title";
import Products from "api/products.json";
import ProductItem from "components/ui/ProductItem";

export default function Favorites() {

  const [products, setProducts] = useState([]);

  useEffect(() => {
    setProducts(Products);
  }, [])

  return (
    <div>
        <Title>Favoriler</Title>
        <div className="grid grid-cols-8 gap-0.1 bg-white rounded-lg overflow-hidden">
          {products && products.map(product => <ProductItem product={product}/>)}
        </div>
    </div>
  )
}
