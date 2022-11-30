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
import OrderByChart from "../../components/order_by_chart";
import { SlArrowRight } from "react-icons/sl";
import Cart from "../../components/cart";

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
  const isCart = useSelector((state) => state.cart.isOpen);
  return e(
    "main",
    { className: "app__main" },
    e(Header),
    e(
      "div",
      { className: "app__main--wrapper" },
      e(Aside),
      e(Shop),
      !isMobile &&
        e(
          "div",
          { className: "floating__menu" },
          e(
            "details",
            { className: "details" },
            e(
              "summary",
              { className: "details__summary" },
              "Ordenar por:",
              e(
                "span",
                { className: "details__summary--arrow" },
                e(SlArrowRight, { size: 16 })
              )
            ),
            e(OrderByChart)
          )
        )
    ),
    e("footer", { className: "footer" }, "M3: Implantação de E-commerce VTEX"),
    isMobile && e(OrderByMobile),
    isMobile && e(FilterByMobile),
    isCart && e(Cart)
  );
}

export default Home;
