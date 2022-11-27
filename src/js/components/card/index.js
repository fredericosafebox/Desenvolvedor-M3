import React from "react";
import { useDispatch, useSelector } from "react-redux";
import { addProduct } from "../../../store/reducers/cartSlice.reducer";
const e = React.createElement;

function Card({ data }) {
  const products = useSelector((state) => state.products.value);
  const dispatch = useDispatch();
  const { id, name, price, parcelamento, color, image, size, date } = data;
  const buy = () => {
    const target = products.find((product) => product.id === id);
    dispatch(addProduct(target));
  };

  const fPrice = price.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  const fParcela = parcelamento[1].toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  const fParcelamento = `até ${parcelamento[0]}x de ${fParcela}`;

  return e(
    "li",
    { className: "shop__products--card", id },
    e(
      "div",
      { className: "card__display" },
      e("img", { className: "card__display--img", src: image, alt: name })
    ),
    e("h4", { className: "card__title" }, name),
    e(
      "div",
      { className: "card__table" },
      e("h5", { className: "card__price" }, fPrice),
      e("p", { className: "card__parcelamento" }, fParcelamento)
    ),
    e("button", { className: "card__button", onClick: buy }, "COMPRAR")
  );
}

export default Card;
