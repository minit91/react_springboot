import React, { Component } from "react";
import { connect } from "react-redux";
import { setStepRate } from "../actions";

// 증감 값 step(간격) 수정 컴포넌트
class StepInput extends Component {
  state = {
    rate: 1, // 상태변수 입력값이 1이다.
  };
  onStepChange = (e) => {
    // 입력값을 정수 변환
    let r = parseInt(e.target.value, 10); // 아래에서 onChange 이벤트가 발생하면 발생한값을 파싱하는것(정수로 변환?)
    if (r === NaN) return 1;
    // 정상적인 숫자라면 이 값을 상태값으로 저장
    //this.setState({ rate: r });
    // 값 변경 액션 발동
    this.props.onChgStep(r);
  };
  componentWillReceiveProps(newProps) {
    // 스트어에 저장된 rate값이 변경되면 이벤트를 타고와서 여기 상태값 변경해줌
    this.setState({ rate: newProps.stepValue });
  }
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
let tmp = (state) => {
  return {
    stepValue: state.counterReducer.step,
  };
};
let tmp2 = (disfatch) => {
  return {
    onChgStep: (newValue) => disfatch(setStepRate(newValue)),
  };
};
StepInput = connect(tmp, tmp2)(StepInput);
export default StepInput;
