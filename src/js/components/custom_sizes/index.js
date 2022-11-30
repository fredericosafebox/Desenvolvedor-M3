import React from "react";
import { useDispatch } from "react-redux";
import {
  addSize,
  removeSize,
} from "../../../store/reducers/productsSlice.reducer";

const e = React.createElement;

function CustomSize({ title }) {
  const dispatch = useDispatch();
  const applySize = (event) => {
    if (event.currentTarget.checked) {
      dispatch(addSize(title));
    } else {
      dispatch(removeSize(title));
    }
  };

  return e(
    "label",
    { className: "custom__size" },
    e("input", {
      type: "checkbox",
      name: "filter",
      value: title,
      onChange: (event) => applySize(event),
    }),
    title
  );
}

export default CustomSize;
