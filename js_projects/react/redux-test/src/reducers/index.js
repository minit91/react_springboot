/**
 * 리듀서
 * 실제 액션 수행 담당, 액션과 스토어 사이 연결고리
 *  - 상태 정의(전역변수 정의)
 *  - 액션에 따른 상태 처리(상태값 업데이트)
 *  - 스토어와 연결
 */
// 1. 액션 정보를 가져온다
import * as act from "../actions";

// 2. 스토어와 연결 => 여러개(1개일수도 있다)의 리듀서를 묶어야 한다(컴바인)
import { combineReducers } from "redux";

// 3. 상태변수(전역적으로 관리되는 전역 상태 변수) => {}
const counterState = {
  value: 0, // 카운트값
  step: 1, // 카운트 증감의 step값
};

// 4. 카운트증가(액션) => (원본카피후교체 => 변경되는부분만 수정) 대체 처리
//    전역상태변수 관리(리듀서)
//    ( 전역상태변수, 액션 )
const counterReducer = (state = counterState, action) => {
  // action => increment(), decrement(), ... 전달된다
  switch (action.type) {
    case act.COUNTER_INCREMENT: // 증가버튼을 눌렀다
      return {
        ...state,
        value: state.value + state.step,
      };
    case act.COUNTER_DECREMENT: // 감소버튼을 눌렀다
      return {
        ...state,
        value: state.value - state.step,
      };
    //return Object.assign( {}, state, );
    case act.COUNTER_STEP_UPDATE: // step 증감
      return {
        ...state,
        step: action.rate,
      };
  }
  // 일치되는 액션이 없으면 그대로 리턴
  return state;
};

// 5. 더미리듀서 생성(없어서됨)
const dumyReducers = (state = { v: "" }, action) => state;

// 6. 리듀서 컴파인을 통해 4, 5번 함수를 리듀서로 묶어서 관리(이제 리듀서가 된다)
const reducerTotal = combineReducers({ counterReducer, dumyReducers });

// 7. 대표 모듈
export default reducerTotal;
