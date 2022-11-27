import React from "react";
import { useDispatch } from "react-redux";
import { open } from "../../../store/reducers/modalSlice.reducer";
const e = React.createElement;

function Aside() {
  const dispatch = useDispatch();
  const openOrder = () => dispatch(open("order"));
  const openFilter = () => dispatch(open("filter"));

  return e(
    "aside",
    { className: "aside" },
    e("h2", null, "Blusas"),
    e(
      "div",
      { className: "aside__buttonBox" },
      e("button", { onClick: openFilter }, "Filtrar"),
      e("button", { onClick: openOrder }, "Ordernar")
    )
  );
}

export default Aside;
