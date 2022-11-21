import React, { Component } from "react";

// 증감 값 step(간격) 수정 컴포넌트
class StepInput extends Component {
  state = {
    rate: 1, // 상태변수
  };
  onStepChange = (e) => {};
  render() {
    let { rate } = this.state;
    return (
      // {{}} 중괄호 2개를 사용해서 css를 바로 넣어 사용하는 것
      <div style={{ marginTop: 15 }}>
        <input onChange={this.onStepChange} value={rate} />
      </div>
    );
  }
}

export default StepInput;
