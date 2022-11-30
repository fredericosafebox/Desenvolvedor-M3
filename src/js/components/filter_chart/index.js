import React, { useEffect } from "react";
import Colors from "../filter_chart_colors";
import Sizes from "../filter_chart_sizes";
import Prices from "../filter_chart_prices";
import { SlArrowRight } from "react-icons/sl";
import { resetFilters } from "../../../store/reducers/productsSlice.reducer";
import { useDispatch, useSelector } from "react-redux";
import { close } from "../../../store/reducers/modalSlice.reducer";

const e = React.createElement;

function Filters() {
  const reloadParam = useSelector((state) => state.products.rebase);
  const dispatch = useDispatch();
  useEffect(() => {}, [reloadParam]);
  const cleanAll = () => {
    dispatch(close());
    dispatch(resetFilters());
  };
  return e(
    "nav",
    { className: "aside__filters" },
    e(
      "details",
      { className: "details" },
      e(
        "summary",
        { className: "details__summary" },
        "CORES",
        e(
          "span",
          { className: "details__summary--arrow" },
          e(SlArrowRight, { size: 24 })
        )
      ),
      e(Colors)
    ),
    e(
      "details",
      { className: "details" },
      e(
        "summary",
        { className: "details__summary" },
        "TAMANHOS",
        e(
          "span",
          { className: "details__summary--arrow" },
          e(SlArrowRight, { size: 24 })
        )
      ),
      e(Sizes)
    ),
    e(
      "details",
      { className: "details" },
      e(
        "summary",
        { className: "details__summary" },
        "FAIXA DE PREÇO",
        e(
          "span",
          { className: "details__summary--arrow" },
          e(SlArrowRight, { size: 24 })
        )
      ),
      e(Prices)
    ),
    e(
      "div",
      { className: "aside__buttonBox" },
      e(
        "button",
        {
          onClick: cleanAll,
          className: "aside__buttonBox--clean",
        },
        "LIMPAR"
      )
    )
  );
}

export default Filters;
