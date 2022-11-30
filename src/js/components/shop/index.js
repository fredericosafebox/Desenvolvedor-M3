import React from "react";
import { useSelector, useDispatch } from "react-redux";
import Card from "../card";
import { loadMore } from "../../../store/reducers/productsSlice.reducer";

const e = React.createElement;

function Shop() {
  const dispatch = useDispatch();
  const {
    value: allProducts,
    filteredList,
    tagCounter,
    range,
  } = useSelector((state) => state.products);

  return e(
    "main",
    { className: "shop" },
    e(
      "ul",
      { className: "shop__products" },
      tagCounter < 1 &&
        allProducts
          .filter((product, index) => index < range)
          .map((product) => e(Card, { data: product, key: product.id })),
      tagCounter >= 1 &&
        filteredList
          .filter((product, index) => index < range)
          .map((product) => e(Card, { data: product, key: product.id })),
      tagCounter >= 1 &&
        filteredList.length == 0 &&
        e("span", { className: "sorry" }, "Nenhum produto encontrado :(")
    ),
    range < allProducts.length &&
      e(
        "div",
        { className: "shop__loadMore" },
        e(
          "button",
          {
            className: "shop__loadMore--button",
            onClick: () => dispatch(loadMore()),
          },
          "CARREGAR MAIS"
        )
      )
  );
}

export default Shop;
