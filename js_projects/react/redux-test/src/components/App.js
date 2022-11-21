import "./App.css";
// 1. 추가
import Counter from "./Counter";
import Buttons from "./Buttons";
import StepInput from "./StepInput";

/*
            UI
---------------------------
        카운터(숫자)        => Counter Component
---------------------------
   [증가버튼]  [감소버튼]   => Buttons Component
---------------------------
    [ 간격 수정 입력창 ]    => StepInput Component
*/

function App() {
  return (
    <div className="App">
      {/* 2. 추가 */}
      <Counter />
      <Buttons />
      <StepInput />
    </div>
  );
}

export default App;
