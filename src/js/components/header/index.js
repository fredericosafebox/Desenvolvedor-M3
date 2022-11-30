import React from "react";
import { GiShoppingBag } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";
import { openCart } from "../../../store/reducers/cartSlice.reducer";

const e = React.createElement;

function Header() {
  const counter = useSelector((state) => state.cart.qtd);
  const dispatch = useDispatch();

  return e(
    "header",
    { className: "header" },
    e(
      "div",
      { className: "header__menu" },
      e("img", {
        src: "../../../img/logo-m3.png",
        className: "header__menu--logo",
      }),
      e(
        "button",
        {
          className: "header__menu--cart",
          onClick: () => dispatch(openCart()),
        },
        e(GiShoppingBag, { size: 22 }),
        counter > 0 && e("div", { className: "floating_number" }, counter)
      )
    )
  );
}

export default Header;
