import React, { useEffect } from "react";
import Modal from "../modal";
import { useSelector, useDispatch } from "react-redux";
import { toggleOrder } from "../../../store/reducers/modalSlice.reducer";
import OrderByChart from "../order_by_chart";

const e = React.createElement;

function OrderByMobile() {
  const { value: view, oClass } = useSelector((state) => state.modal);
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(toggleOrder());
  }, [view]);

  return e(Modal, {
    title: "ORDERNAR",
    cClass: oClass,
    children: e(OrderByChart),
  });
}

export default OrderByMobile;
