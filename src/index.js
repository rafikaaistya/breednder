import React from "react";
import ReactDOM from "react-dom";
import Routee from "./Routee";
import { Provider } from "react-redux";
import store from "./_redux/store";
import * as serviceWorker from "./serviceWorker";

ReactDOM.render(
  <Provider store={store}>
    <Routee />
  </Provider>,
  document.getElementById("root")
);
serviceWorker.unregister();
