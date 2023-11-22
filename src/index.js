import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import { createStore } from "redux";
import { Provider } from "react-redux";
// import reducers from "./reducers";
import reducers from "./reducers";

const store = createStore(reducers);

//Provider에 데이터를 전달해주면 중간 컴포넌트에서 props 값을 다시 전달해줄 필요없이 모든 하위 컴포넌트에 데이터를 전달해준다
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
