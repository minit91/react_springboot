import React from "react";
// 특정 주소를 가진 URL로 이동시키는 요소 : Link
import { Link } from "react-router-dom";
// css, sass 가져오기
import "./Navigation.css";

const Navigation = () => {
  return (
    <div className="nav">
      <Link to="/">홈</Link>
      <Link to="/about">어바웃</Link>
      {/* 나중에 제거 */}
      <Link to="/detail">상세</Link>
    </div>
  );
};

export default Navigation;
