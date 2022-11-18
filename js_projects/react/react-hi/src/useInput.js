/**
 * **커스텀 훅
 * - 여러 컴포넌트에 유사한 기능을 가진 요소를 사용한다면 Hook으로 만들어서 제공
 */

// 리듀서(useReducer)는 더 다양한 상태를 다양한 값으로 업데이트 하기 위한 고급 상태 관리 훅
// reducer(현재상태, 상태를 업데이트 하기 위한 액션정보)
import { useReducer } from 'react';

// 특정 상태(state) 값을 교체할 때  아래 내부처럼 표현
// > let a = { k:10, z:20 }
// > { ...a, ['k']:11 } // a를 복제해서 k요소의 값을 변경
// = {k: 11, z: 20}
// 원칙 : 불변성을 지키면서 새로운 상태를 반환하는 절차 -> 원본을 카피뜨고 -> 값을 수정한 후 -> 대체
function reducer(state, action) {
  // state는 {}객체일 것이고 이를 카피해서 리턴
  // ... 스프레드 연산자라고 함.
  // 상태값을 갱신하는 기본 형태
  // 1. state를 복제하여 새로 생성
  // 2. 특정 액션에 맞춰서 state 내부에 있는 특정값을 교체한다.
  return {
    ...state,
    [action.name]: action.value,
  };
}

export default function useInput(initialState) {
  // const [저장한상태, 액션을발생시키는함수] = useReducer(리듀서함수, 리듀서의기본값)
  // dispatch 함수는 리듀서 내부에 이미 준비되어 있다.
  const [state, dispatch] = useReducer(reducer, initialState);
  // 상태값들이 input 태그를 통해서 값을 입력받는데 이 때 이벤트를 받아주는 함수를 하나 준비함
  const onChange = (e) => {
    // << 인터넷에서 입력할때 실행됨
    // 이벤트 발생 => dispatch(액션) 호출되면 => reducer함수 호출 => 원본카피->값수정->대체
    dispatch(e.target);
  };
  return [state, onChange];
}
