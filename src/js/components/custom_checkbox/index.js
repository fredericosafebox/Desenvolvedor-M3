import React from "react";
import { useDispatch } from "react-redux";
import {
  addColor,
  removeColor,
  addPrice,
  removePrice,
} from "../../../store/reducers/productsSlice.reducer";

const e = React.createElement;

function CustomCheckbox({ title, prices }) {
  const dispatch = useDispatch();
  const applyColor = (event) => {
    if (prices) {
      if (event.currentTarget.checked) {
        dispatch(addPrice(prices));
      } else {
        dispatch(removePrice(prices));
      }
    } else {
      if (event.currentTarget.checked) {
        dispatch(addColor(title));
      } else {
        dispatch(removeColor(title));
      }
    }
  };

  return e(
    "label",
    { className: "custom__input" },
    e("input", {
      type: "checkbox",
      name: "filter",
      value: title.toLowerCase(),
      onChange: (event) => applyColor(event),
    }),
    e("span", { className: "custom__input--checkbox" }, e("div")),

    title
  );
}

export default CustomCheckbox;
