# Virtual DOM
    - DOM : Document Object Model
        - 객체로 문서 구조를 표현하는 방법 (문서 객체 모델)
            - Document : XML(데이터), HTML(데이터, 구조), ..(ML 마크업랭귀지)
        - 사용자가 브라우저에서 주소를 입력하고 엔터 치면 -> request -> 콘텐츠를 제공하는 서버에 도착 ->
          요청에 대한 처리 후 응답 -> response -> 브라우저(chrome)는 html을 파싱(해석, 메모리로드)해서 
          DOM을 생성(메모리에 상주)에 js, css를 적용하여 화면을 그린다.
                => 웹이 서비스되는 플로우
        - DOM(트리형태를 가짐, DOM Tree)을 이용하면 특정 노드를 찾고, 수정, 제거, 삽입 등 작업이 가능
          => DOM 조작 => 화면이 다이나믹하게 변화된다.
    - 개선 / 원리
        - 변경된 부분만 찾아서 갱신한다.
        - DOM -> 복제 -> VDOM만들고 -> 수정반영 -> 비교 -> 차이나는 부분만 대체
    - VDOM을 직접 묘사하는 방식은 react 18부터는 미지원

# 기본세팅
    - <script src="https://unpkg.com/react@17/umd/react.development.js"></script>
      <script src="https://unpkg.com/react-dom@17/umd/react-dom.development.js"></script>
      <script src="https://unpkg.com/babel-standalone@6.15.0/babel.min.js"></script>
    - html, css, js가 결합된 html 문서에 익숙해지고, 리액트 요소/원리를 가장 간단하게 파악하는 방식
      (실제 개발에서는 사용되지 않음)
