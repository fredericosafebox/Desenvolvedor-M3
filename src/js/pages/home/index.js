import React, { createElement } from "react";
import Painel from "../../components/painel";
const e = React.createElement;

function Home() {
  return e(
    "div",
    { className: "home" },
    "Hello Home Page",
    createElement(Painel)
  );
}

export default Home;
