/**
 * 액션 정의
 *  - 증가 버튼을 누르면 -> 카운터 값을 step(간격)만큼 증가시켜라(액션) 전달
 *  - 감소 버튼을 누르면 -> 카운터 값을 step(간격)만큼 감소시켜라(액션) 전달
 *  - step 값이 변경되면 -> 변경된 값을 step(간격)의 최종값으로 업데이트하라(액션) 전달
 *  - 액션에 대한 상수(정의값) 대문자로간다(정한것)
 *  - 외부에서 이 액션 정의값들을 참조할 수 있다.
 *  - 각 액션에 대한 액션값을 가져가는 함수 구현
 */
// 액션을 정의하는 상수
export const COUNTER_INCREMENT = "COUNTER_INCREMENT";
export const COUNTER_DECREMENT = "COUNTER_DECREMENT";
export const COUNTER_STEP_UPDATE = "COUNTER_STEP_UPDATE";

// 액션값을 전달하는 함수
export function increment() {
  return { type: COUNTER_INCREMENT };
}
export function decrement() {
  return { type: COUNTER_DECREMENT };
}
export function setStepRate(newValue) {
  return { type: COUNTER_STEP_UPDATE, rate: newValue };
}
