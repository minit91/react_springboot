import React, { Component } from 'react';

// 클레스형 컴포넌트
class MyInput2 extends Component {
  constructor(props) {
    super(props);
    this.state = {
      age: '',
    };
  }
  onSubmit = (e) => {
    // submit 이벤트 종료 처리
    e.preventDefault();  // 이벤트 무효화
    console.log(this.state.age);
    // 입력창을 비우면서 마무리 하려면?
    this.setState({ age: ''})
  };
  onChange = (e) => {
    console.log(e.target.value);
    // 입력값 => 숫자가 아닌경우 빈값으로 대체 => '정규식'이라고 함
    // 숫자가 아닌 경우의 문자들은 모두 빈값으로 대체 -> 정규식 활용
    // 숫자가 아닌 모든 문자는 ''로 대체해라
    const v = e.target.value.replace( /[^0-9]/g, '' ) // ^를 붙이면 숫자 0~9 이외의 모두를 ''로
    this.setState({ age: v });
  };
  render() {
    let { age } = this.state;
    return (
      <div>
        <form onSubmit={this.onSubmit}>
          <input type="text" placeholder="숫자만입력" value={age} onChange={this.onChange}/>
          <input type="submit" value="전송" />
        </form>
      </div>
    );
  }
}

export default MyInput2;