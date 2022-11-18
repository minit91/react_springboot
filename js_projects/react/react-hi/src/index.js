// 1. 모듈 가져오기
import React from 'react';
import ReactDOM from 'react-dom/client';
import './index.css';
// from 상대경로(내가만든 모듈) or 모듈명(yarn install에서 설치된, 순수 node 모듈)
import App from './App'; // .붙으면 현재위치에서 App 위치까지
import MyInput from './MyInput';
import MyInput2 from './MyInput2';
import MySelect2, { MySelect } from './MySelect';
import MyHooksTest2 from './MyHooksTest2';
import reportWebVitals from './reportWebVitals';

const root = ReactDOM.createRoot(document.getElementById('root')); // root를 찾아서 돔을 만들고 render 안의 코드를 화면에 출력해라
root.render(
  <React.StrictMode>
    {/* <App /> */}
    {/*}
    <MyHooksTest2 num="1" name="ko" />
  */}
    <MyInput />
    <MyInput2 />
    <MySelect citys={['서울', '부산', '제주', '대전']} />
    <MySelect2 citys={['서울', '부산', '제주', '대전']} />
  </React.StrictMode>
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
