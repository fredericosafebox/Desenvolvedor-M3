import React from "react";
import Modal from "../modal";

const e = React.createElement;

function FilterByMobile() {
  return e(Modal, { title: "FILTRAR", children: e("h1", null, "FILTRANDO") });
}

export default FilterByMobile;
