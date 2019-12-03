import React from "react";
import ReactDOM from "react-dom";
import TemplateApp from "./TemplateApp";
import configureStore from "./store";
import { Provider } from "react-redux";

const store = configureStore(
  (state = { test: "TEMPLATE APP" }, action) => state
);

ReactDOM.render(
  <Provider store={store}>
    <TemplateApp />
  </Provider>,
  document.getElementById("root")
);
