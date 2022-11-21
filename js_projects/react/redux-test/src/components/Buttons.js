import React, { Component } from "react";
import { connect } from "react-redux";
import { increment, decrement } from "../actions"; // 액션함수 가져오기

class Buttons extends Component {
  render() {
    return (
      <div>
        <button onClick={this.props.onIncrement}>증가</button>
        <button onClick={this.props.onDecrement}>감소</button>
      </div>
    );
  }
}
// 액션함수를 컴포넌틑의 props에 연결
let tmp = (disfatch) => {
  // disfatch자리에 오는 함수는 액션을 발생시키는 함수이다
  return {
    // onIncrement, onDecrement 라는 함수명은 임의로 지은것
    onIncrement: () => disfatch(increment()),
    onDecrement: () => disfatch(decrement()),
  };
};
// connect(전역상태변수연결시, 액션함수연결시)
Buttons = connect(undefined, tmp)(Buttons);
export default Buttons;
