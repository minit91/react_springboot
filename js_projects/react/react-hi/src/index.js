// 1. 모듈 가져오기
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// from 상대경로(내가만든 모듈) or 모듈명(yarn install에서 설치된, 순수 node 모듈)
import App from './App'; // .붙으면 현재위치에서 App 위치까지
import MyInput2 from './MyInput2.js';
import MyInput from './MyInput.js';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // root를 찾아서 돔을 만들고 render 안의 코드를 화면에 출력해라
root.render(
  <React.StrictMode>
    {/* <App /> */}
    <MyInput />
    <MyInput2 />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
