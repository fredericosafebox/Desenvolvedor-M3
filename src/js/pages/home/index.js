import React, { createElement } from "react";
import Header from "../../components/header";

const e = React.createElement;

function Home() {
  return e("div", { className: "app" }, e(Header));
}

export default Home;
