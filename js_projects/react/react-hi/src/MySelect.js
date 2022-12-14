//useState같은 것들은 Hooks라고 한다.
import React, { Component, useState } from 'react';
import PropTypes from 'prop-types';

// 컴포넌트 라이프사이클
//export
class MySelect extends Component {
  constructor(props) {
    super(props);
    console.log('1 생성자');
    this.state = {
      sel: '',
    };
  }

  componentWillMount() {
    console.log('2 componentWillMount()');
  }

  componentDidMount() {
    console.log('4 componentDidMount() : 커폼넌트가 화면에 보인다');
  }

  componentWillReceiveProps(nextProps) {
    console.log('componentWillReceiveProps()');
  }

  //   shouldComponentUpdate(nextProps, nextState) {
  //     console.log('shouldComponentUpdate()');
  //   }

  componentWillUpdate(nextProps, nextState) {
    console.log('componentWillUpdate()');
  }

  componentDidUpdate(prevProps, prevState) {
    console.log('componentDidUpdate()');
  }

  componentWillUnmount() {
    console.log('5 componentWillUnmount()');
  }

  onChange = (e) => {
    this.setState({ sel: e.target.value });
  };
  render() {
    console.log('3 render()');
    console.log(this.props.citys);
    // 배열이 나오면 => map => 맴버조작 => 동적 배열 생성 => 화면반영 생각해야함.
    // this.props.citys 를 이용하여 동적으로 <option ...> 을 생성하여 화면에 반영하시오
    const options = this.props.citys.map(
      // JSX를 리턴하면 ()를 붙일수 있다
      // 동적으로 리스트형태를 구성할때는 반드시 key 속성 부여(없으면 경고, 고유값)
      (value, index) => (
        <option key={index} value={value}>
          {value}
        </option>
      )
    );
    return (
      <div>
        {/* 선택한 값이 저장되게 value지정해줌, onChange 변화될 때 */}
        <select value={this.state.sel} onChange={this.onChange}>
          {/* <option value="서울">서울</option> */}
          {options}
        </select>
      </div>
    );
  }
}

MySelect.propTypes = {};

// react 16.8 버전에서 Hooks를 도입하여 함수형 컴포넌트에서도 state를 사용할수 있게 제공
const MySelect2 = (props) => {
  // ** 함수형 컴포넌트에서 상태 변수를 정의하고, 초기화하는 방법
  // const [ 상태변수(읽기전용), set상태변수(값설정함수, 생략가능)] = useState( 초기값(최초 상태가 가질값): 함수 빼고 다됨 );
  const [sel, setSel] = useState('');
  // select 태그의 자식 요소 구현 (props를 사용해야 index의 정보를 들고올 수 있다.)
  const options = props.citys.map((value, index) => (
    <option key={index} value={value}>
      {value}
    </option>
  ));
  const onChange = (e) => {
    setSel(e.target.value);
  };
  // jsx 동적 생성후 리턴
  return (
    <div>
      {/* stste는 클레스 컴포넌트의 속성 */}
      <select value={sel} onChange={onChange}>
        {options}
      </select>
    </div>
  );
};

export { MySelect };
// 대표지정하면 index.js의 오류는 사라짐
export default MySelect2;
