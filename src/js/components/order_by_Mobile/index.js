import React, { useEffect } from "react";
import Modal from "../modal";
import { useDispatch, useSelector } from "react-redux";
import { toggleOrder } from "../../../store/reducers/modalSlice.reducer";

const e = React.createElement;

function OrderByMobile() {
  const dispatch = useDispatch();
  const { value: view, oClass } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(toggleOrder());
  }, [view]);
  return e(Modal, {
    title: "ORDERNAR",
    cClass: oClass,
    children: e("h1", null, "Ordenando"),
  });
}

export default OrderByMobile;
