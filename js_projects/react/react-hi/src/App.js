// 1. 모듈 가져오기
// 다른곳에서 작성된 리소스(이미지, css), 코드(js, ts,..) 가져올 때 사용
import logo from './logo.svg';
import './App.css';

// 2. 컴포넌트 정의
// 함수형 컴포넌트
// function App() { 아래와 같다.
const App = () => {
  return (
    <div className="App">
      <header className="App-header">
        <img src={logo} className="App-logo" alt="logo" />
        <p>
          Hello, react
          {/* Edit <code>src/App.js</code> and save to reload. */}
        </p>
        <a
          className="App-link"
          href="https://reactjs.org"
          target="_blank"
          rel="noopener noreferrer"
        >
          Learn React
        </a>
      </header>
    </div>
  );
}

// 3. 다른 코드 혹은 다른 jsx에서 사용할 수 있게 모듈화
// 기본 모듈이 App이다 => 대표성을 띈다.
export default App;
// export App; 는 모듈 App이다.
