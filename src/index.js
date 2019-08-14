import React from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { Provider } from "react-redux";
import MainContainer from "./containers/MainContainer";
import store from "./store";
ReactDOM.render(
  <Provider store={store}>
    <BrowserRouter>
      <Route path="/" component={MainContainer} />
    </BrowserRouter>
  </Provider>,
  document.getElementById("app")
);
