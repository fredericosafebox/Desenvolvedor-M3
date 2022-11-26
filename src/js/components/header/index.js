import React from "react";
import { GiShoppingBag } from "react-icons/gi";
import { useSelector } from "react-redux";

const e = React.createElement;

function Header() {
  const counter = useSelector((state) => state.counter.value);
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
        { className: "header__menu--cart" },
        e(GiShoppingBag, { size: 22 }),
        counter > 0 && e("div", { className: "floating_number" }, counter)
      )
    )
  );
}

export default Header;
