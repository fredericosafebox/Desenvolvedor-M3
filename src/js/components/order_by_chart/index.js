import React from "react";
import { close } from "../../../store/reducers/modalSlice.reducer";
import { useDispatch } from "react-redux";
import { orderBy } from "../../../store/reducers/productsSlice.reducer";

const e = React.createElement;

function OrderByChart() {
  const dispatch = useDispatch();
  const reOrder = (event) => {
    dispatch(orderBy(event.currentTarget.id));
    dispatch(close());
  };
  return e(
    "div",
    { className: "order__wrapper" },
    e(
      "button",
      { className: "order__button", id: "date", onClick: (e) => reOrder(e) },
      "Mais recente"
    ),
    e(
      "button",
      { className: "order__button", id: "high", onClick: (e) => reOrder(e) },
      "Maior preço"
    ),
    e(
      "button",
      { className: "order__button", id: "low", onClick: (e) => reOrder(e) },
      "Menor preço"
    )
  );
}

export default OrderByChart;
