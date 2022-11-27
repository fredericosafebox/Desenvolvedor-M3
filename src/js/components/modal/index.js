import React from "react";
import { useDispatch } from "react-redux";
import { close } from "../../../store/reducers/modalSlice.reducer";
import { TfiClose } from "react-icons/tfi";

const e = React.createElement;

function Modal({ title, children }) {
  const dispatch = useDispatch();
  const closeModal = () => dispatch(close());
  return e(
    "div",
    { className: "modal" },
    e(
      "div",
      { className: "modal__header" },
      e("h3", { className: "modal__header--title" }, title),
      e("button", { onClick: closeModal }, e(TfiClose, { size: 30 }))
    ),
    e("nav", { className: "modal__body" }, children)
  );
}

export default Modal;
