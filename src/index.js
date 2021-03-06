import React, { Suspense } from "react";
import ReactDOM from "react-dom";
import "./index.css";
import { store } from "./app/store";
import { Provider } from "react-redux";
import * as serviceWorker from "./serviceWorker";
import Router from "./Router";
import { BrowserRouter } from "react-router-dom";
import Loading from "./utils/Loading";

ReactDOM.render(
  <React.StrictMode>
    <Suspense fallback={<Loading type="Loading..." />}>
      <Provider store={store}>
        <BrowserRouter>
          <Router />
        </BrowserRouter>
      </Provider>
    </Suspense>
  </React.StrictMode>,
  document.getElementById("root")
);

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
