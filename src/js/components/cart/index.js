import React from "react";
import { useDispatch, useSelector } from "react-redux";
import {
  closeCart,
  clearCart,
} from "../../../store/reducers/cartSlice.reducer";
import { TfiClose } from "react-icons/tfi";
import { GiShoppingBag } from "react-icons/gi";

const e = React.createElement;

function Cart() {
  const dispatch = useDispatch();
  const { itens, qtd, subtotal } = useSelector((state) => state.cart);
  const checkoutPrice = subtotal.toLocaleString("pt-br", {
    style: "currency",
    currency: "BRL",
  });
  return e(
    "div",
    { className: "cart__wrapper" },
    e(
      "div",
      { className: "cart__display" },
      e(
        "div",
        { className: "cart__display--header" },
        e(
          "div",
          null,
          e("span", null, e(GiShoppingBag, { size: 24 })),
          e("h4", null, "CARRINHO")
        ),
        e(
          "button",
          { onClick: () => dispatch(closeCart()) },
          e("span", null, e(TfiClose, { size: 24 }))
        )
      ),
      e(
        "ul",
        { className: "cart__display--body" },
        qtd > 0 &&
          itens.map((product, index) => {
            const fPrice = product.price.toLocaleString("pt-br", {
              style: "currency",
              currency: "BRL",
            });
            return e(
              "li",
              { className: "cart__product", key: `$${index}` },
              e("img", { className: "cart__product--img", src: product.image }),
              e("h5", { className: "cart__product--name" }, product.name),
              e("span", { className: "cart__product--price" }, fPrice),
              e(
                "span",
                { className: "cart__product--qtd" },
                `Qtd: ${product.qtd}x`
              )
            );
          }),
        qtd == 0 && e("span", { className: "sorry" }, "Carrinho vazio :/")
      ),
      e(
        "div",
        { className: "cart__display--checkout" },
        e(
          "span",
          { className: "cart__checkout--price" },
          `Total: ${checkoutPrice}`
        ),
        e("button", { onClick: () => dispatch(clearCart()) }, "LIMPAR")
      )
    )
  );
}

export default Cart;
