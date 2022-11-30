import React from "react";
import { useEffect } from "react";
import api from "../../../services/api";
import Header from "../../components/header";
import Aside from "../../components/aside";
import Shop from "../../components/shop";
import OrderByMobile from "../../components/order_by_Mobile";
import FilterByMobile from "../../components/filter_by_mobile";
import { useSelector, useDispatch } from "react-redux";
import { loadList } from "../../../store/reducers/productsSlice.reducer";
import { setWidth } from "../../../store/reducers/viewSlice.reducer";

const e = React.createElement;

function Home() {
  const dispatch = useDispatch();

  useEffect(() => {
    const getProducts = async () => {
      const result = await api.get("/products").then((res) => res.data);
      dispatch(loadList(result));
    };
    getProducts();
    dispatch(setWidth(window.innerWidth));
    window.addEventListener("resize", (e) =>
      dispatch(setWidth(e.currentTarget.innerWidth))
    );
  }, []);

  const isMobile = useSelector((state) => state.view.isMobile);
  return e(
    "main",
    { className: "app__main" },
    e(Header),
    e("div", { className: "app__main--wrapper" }, e(Aside), e(Shop)),
    isMobile && e(OrderByMobile),
    isMobile && e(FilterByMobile)
  );
}

export default Home;
