import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "./store";
import AppComponent from "@Components";

import "@elastic/eui/dist/eui_theme_amsterdam_dark.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <AppComponent />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
