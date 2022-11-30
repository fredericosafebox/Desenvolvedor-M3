import React from "react";
import Colors from "../filter_chart_colors";
import Sizes from "../filter_chart_sizes";
import Prices from "../filter_chart_prices";
import { useDispatch, useSelector } from "react-redux";
import { open } from "../../../store/reducers/modalSlice.reducer";

const e = React.createElement;

function Aside() {
  const dispatch = useDispatch();
  const isMobile = useSelector((state) => state.view.isMobile);
  const openOrder = () => dispatch(open("order"));
  const openFilter = () => dispatch(open("filter"));

  return e(
    "aside",
    { className: "aside" },
    e("h2", null, "Blusas"),
    isMobile &&
      e(
        "div",
        { className: "aside__buttonBox" },
        e("button", { onClick: openFilter }, "Filtrar"),
        e("button", { onClick: openOrder }, "Ordernar")
      ),
    !isMobile &&
      e(
        "div",
        { className: "aside__menu" },
        e("h3", null, "CORES"),
        e(Colors),
        e("h3", null, "TAMANHOS"),
        e(Sizes),
        e("h3", null, "FAIXAS DE PREÇO "),
        e(Prices)
      )
  );
}

export default Aside;
