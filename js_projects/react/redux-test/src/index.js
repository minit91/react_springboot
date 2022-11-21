import React from "react";
import ReactDOM from "react-dom";
import "./index.css";
import App from "./components/App";
import reportWebVitals from "./reportWebVitals";
// 리덕스 구현 - 추가
import { Provider } from "react-redux";
import { createStore } from "redux";
import reducerTotal from "./reducers";

// 스토어 생성(리듀서)
// 리듀서와 스토어 연결고리 완성
const store = createStore(reducerTotal);

// const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(
//   {/* 공급자 컴포넌트에 스토어 연결 */}
//   <Provider store={store}>
//     <App />
//   </Provider>
// );
ReactDOM.render(
  <Provider store={store}>
    <App />
  </Provider>,
  document.getElementById("root")
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
