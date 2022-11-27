import React from "react";
import { useSelector } from "react-redux";
import Card from "../card";
const e = React.createElement;

function Shop() {
  const products = useSelector((state) => state.products.value);

  return e(
    "main",
    { className: "shop" },
    e(
      "ul",
      { className: "shop__products" },
      products.map((product) => e(Card, { data: product, key: product.id }))
    )
  );
}

export default Shop;
