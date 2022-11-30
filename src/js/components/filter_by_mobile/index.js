import React, { useEffect } from "react";
import Modal from "../modal";
import Filters from "../filter_chart";
import { useSelector, useDispatch } from "react-redux";
import { toggleFilter } from "../../../store/reducers/modalSlice.reducer";

const e = React.createElement;

function FilterByMobile() {
  const dispatch = useDispatch();
  const { value: view, fClass } = useSelector((state) => state.modal);

  useEffect(() => {
    dispatch(toggleFilter());
  }, [view]);

  return e(Modal, {
    title: "FILTRAR",
    children: e(Filters),
    cClass: fClass,
  });
}

export default FilterByMobile;
