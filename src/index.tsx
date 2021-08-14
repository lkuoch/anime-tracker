import React from "react";
import ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { Provider as FluentProvider, teamsTheme } from "@fluentui/react-northstar";

import { store } from "@App/store";
import App from "@Components/index";

ReactDOM.render(
  <React.StrictMode>
    <Provider store={store}>
      <FluentProvider theme={teamsTheme}>
        <App />
      </FluentProvider>
    </Provider>
  </React.StrictMode>,
  document.getElementById("root")
);
