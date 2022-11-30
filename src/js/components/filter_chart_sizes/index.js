import React from "react";
import CustomSize from "../custom_sizes";

const e = React.createElement;

function Sizes() {
  const sizes = ["P", "M", "G", "GG", "U", "36", "38", "40", "42", "44", "46"];
  return e(
    "ul",
    { className: "aside__filters--sizes" },
    sizes.map((size, index) => {
      return e("li", { key: index }, e(CustomSize, { title: size }));
    })
  );
}

export default Sizes;
