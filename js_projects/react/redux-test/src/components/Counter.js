import React, { Component } from "react";
import { connect } from "react-redux";

class Counter extends Component {
  render() {
    return (
      <div>
        {/* this.props.counterValue는 전역상태변수 value이다 */}
        <h2>카운터:{this.props.counterValue}</h2>
      </div>
    );
  }
}
// 스토어에 저장된 상태값을 컴포넌트의 props에 연결 => connect()
let tmp = (state) => {
  return {
    // 새로운 pros의 하위 맴버 설정(CounterValue 새로 설정)
    // 리듀서에 생성된 state의 value(전역상태변수)를 counterValue에 세팅
    // 새로설정된키(변수) : 커바인리듀서.개별리듀서.상태변수값
    counterValue: state.counterReducer.value,
  };
};

// 전역상태변수와 컴포넌트 props를 연결한 새로운 Counter 컴포넌트를 만들어서 리턴
Counter = connect(tmp)(Counter); // 클로저 함수호출 형태(문법적)
export default Counter;
