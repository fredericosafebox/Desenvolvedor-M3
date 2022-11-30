import React from "react";
import CustomCheckbox from "../custom_checkbox";

const e = React.createElement;

function Colors() {
  const colors = [
    "Amarelo",
    "Azul",
    "Branco",
    "Cinza",
    "Laranja",
    "Verde",
    "Vermelho",
    "Preto",
    "Rosa",
    "Vinho",
  ];
  return e(
    "ul",
    { className: "aside__filters--colors" },
    colors.map((color, index) => {
      return e("li", { key: index }, e(CustomCheckbox, { title: color }));
    })
  );
}

export default Colors;
