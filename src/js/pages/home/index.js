import React from "react";
import { useEffect } from "react";
import api from "../../../services/api";
import Header from "../../components/header";
import Aside from "../../components/aside";
import OrderByMobile from "../../components/order_by_Mobile";
import FilterByMobile from "../../components/filter_by_mobile";
import { useSelector, useDispatch } from "react-redux";
import { loadList } from "../../../store/reducers/productsSlice.reducer";

const e = React.createElement;

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const result = await api.get("/products").then((res) => res.data);
      dispatch(loadList(result));
    };
    getProducts();
  }, []);

  const { value: isModal, view } = useSelector((state) => state.modal);
  // const vitrine = useSelector((state) => state.products.value);

  return e(
    "div",
    { className: "app" },
    e("main", { className: "app__main" }, e(Header), e(Aside)),
    isModal && view == "order" && e(OrderByMobile),
    isModal && view == "filter" && e(FilterByMobile)
  );
}

export default Home;
