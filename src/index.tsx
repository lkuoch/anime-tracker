import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";

import { store } from "@App/store";
import App from "@Components/index";

import "@elastic/eui/dist/eui_theme_amsterdam_light.css";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
