/**
 * 스토리 보드를 보고 전체 페이지 구성하여 배치한다
 * - 단, 개별 페이지 내용은 비워있어도 상관없다
 * - 이때 사용되는 메인 모듈 : react-router-dom
 */
import {
  HashRouter, // 가장 바깥쪽에서 전체 페이지를 감싼다
  Route, // 개별 페이지, url을 가진다(path), 컴포넌트 지정
} from "react-router-dom";
import "./App.css";
import { Home, About, Detail, Navigation } from "./pages";

// http://localhost:3000/#/
// http://localhost:3000/#/Home
// http://localhost:3000/#/Detail
// exact={true} => url이 정확하게 일치할때만 보여라
// 주소가 바뀌면 새로운 페이지가 보인다(특정 주소에 특정 페이지를 노출:라우터 담당)
function App() {
  return (
    <HashRouter>
      {/* 네비게이터 : 각 페이지를 이동할 수 있는 메뉴 제공 */}
      <Navigation />
      {/* 홈페이지 */}
      <Route path="/" component={Home} exact={true} />
      {/* about 페이지 */}
      <Route path="/about" component={About} />
      {/* 상세 페이지 */}
      <Route path="/detail" component={Detail} />
    </HashRouter>
  );
}

export default App;
