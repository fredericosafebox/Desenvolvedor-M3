import React from "react";
import Modal from "../modal";

const e = React.createElement;

function OrderByMobile() {
  return e(Modal, { title: "ORDERNAR", children: e("h1", null, "TESTANDO") });
}

export default OrderByMobile;
