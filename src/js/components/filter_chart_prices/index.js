import React from "react";
import CustomCheckbox from "../custom_checkbox";

const e = React.createElement;

function Prices() {
  const prices = [
    { min: 0, max: 50 },
    { min: 51, max: 150 },
    { min: 151, max: 300 },
    { min: 301, max: 500 },
    { min: 501, cap: true },
  ];
  return e(
    "ul",
    { className: "aside__filters--prices" },
    prices.map((price, index) => {
      if (price.cap) {
        return e(
          "li",
          { key: index },
          e(CustomCheckbox, {
            title: `a partir de R$ 500,00`,
            prices: "500;99999",
          })
        );
      }
      const { min, max } = price;
      return e(
        "li",
        { key: index },
        e(CustomCheckbox, {
          title: `de R$${min} até R$${max}`,
          prices: `${min};${max}`,
        })
      );
    })
  );
}

export default Prices;
