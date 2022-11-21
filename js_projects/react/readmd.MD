# react

    - 초기 js는 웹브라우저를 대상으로 이벤트/연산/인터렉션 담당하는 단순 스크립트였다.
    - 구글 -> 2005(ajax 등장) -> 2008(Chrome 브라우저(V8기반) 개발 공개) -> V8엔진공개 -> V8기반으로 js를 구동하는 생태계 생성 : node
    - node 기반 / 언어 ( JavaScript -> TypeScript )
        - 웹 어플리케이션, 서버 사이드, 데스크톱 어플리케이션 전방위에 사용됨
        - slack, atom, vs code : electron 기반 데스크톱 어플리케이션
        - 페이스북, 디스코드, 페이팔, 이베이 : 모바일웹앱(ionic, phonegap, titanium, react native(3세대), 플러터(구글 3~4세대/Dart 언어))
        - SPA : 프런트 중심의 웹어플리케이션(angular, react, vue)
    - react는 전통적인 웹 프레임웍의 아킥텍쳐 MVC(Model View Controller), MVVM, MVW, ... 중에서
      View에만 집중하는 프레임웍이다. 화면처리속도를 높이는 전략
        - 화면상에 갱신되는 부분만 새로운 뷰를 만들어서 대체
        - 랜더링(화면갱신)
            - 절차(나중에 기록)
        - react + (나머지 기능 : third part 프레임웍/라이브러리) => node 생태계 지원

    - 프레임웍 : 해당 생태계의 룰에 맞춰서 개발
    - 라이브러리 : 일종의 특정 기능을 제공하는 모듈, 나의 룰대로 개발

# node 기반 개발

    - node 설치(완료)
        - $ node -v
            - v18.12.1

    - 프로젝트 생성 모듈 설치(오피셜)
        - $ sudo npm install -g create-react-app  << $는 아래의 경유 주소로 생각하면됨 >>


    - 패키지 관리자 추가 설치
        - node를 설치하면 npm이 자동 설치가 된다 => npm이 패키지 관리자 <-> (파이썬 pip)
        - 보안, 설치 속도, 캐싱 유리한 패키지 관리자 yarn이 있음,
        - $ (sudo) npm install -g yarn
        - $ yarn --version
            보안 이슈로 문제 발생한다면 아래처럼 처리
            --------------------------------------
            관리자 권한으로 powershell 실행후 아래 처리 ( window 검색창 -> powershell 검색 후 관리자 권한으로 접속)
            * https://velog.io/@soyi47/yarn%EC%8A%A4%ED%81%AC%EB%A6%BD%ED%8A%B8%EC%8B%A4%ED%96%89%EC%98%A4%EB%A5%98 참고
            PS C:\windows\system32> Get-ExecutionPolicy
            Restricted
            PS C:\windows\system32> Set-ExecutionPolicy RemoteSigned

            실행 규칙 변경
            실행 정책은 신뢰하지 않는 스크립트로부터 사용자를 보호합니다. 실행 정책을 변경하면
            about_Execution_Policies 도움말 항목(https://go.microsoft.com/fwlink/?LinkID=135170)에
            설명된 보안 위험에 노출될 수 있습니다. 실행 정책을 변경하시겠습니까?
            [Y] 예(Y)  [A] 모두 예(A)  [N] 아니요(N)  [L] 모두 아니요(L)  [S] 일시 중단(S)
            [?] 도움말(기본값은 "N"): y
            PS C:\windows\system32> Get-ExecutionPolicy
            RemoteSigned

    - 프로젝트 생성
        - $ create-react-app react-basic
        or
        - $ yarn create react-app react-hi          둘 중에서 선택하면 된다.

    - 필요 모듈 설치하기
        - $ cd react-hi
        - $ yarn install (or npm install)
            => node_modules가 설치된다.

    - 프로젝트 구동
        - $ cd react-hi
        - $ yarn start

    - 확장 프로그램 설치
        - *ESLint : 자바스크립트 문법 검사해주는 도구
            - 오류를 내서 진단, 체크, 수정
        - *Reactjs code snippets : 리액트 함수/클레스 자동완성 제공
            - 제작자 char...
        - *Prettier-code formatter : 코드 스타일 자동 정리
            - F1 > format검색 > format Document...(with) > Prettier : 직접 특정파일에 코드 스타일 적용
            - 자동처리
                - 코딩 -> 저장 -> 자동처리
                - 규칙 가이드
                    - https://Prettier.io/docs/en/options.html
                - 프로젝트 루트에 .prettierrc 파일 생성
                - 파일(code:맥) > 기본설정 > 설정(setting) > format
                on save : 체크( 체크되는데 전부 지정 )

# 신규 프로젝트

    - $ yarn create react-app movie-intro
        - 멀티 페이지 구현
    - $ yarn create react-app redux-test
        - 멀티 페이지에서 특정 상태 정보를 접근(access), 수정(update)
        - flux -> redux -> 다양한 third part 라이브러리(몹스, ...)
        - 리액트에 없는 전역변수 개념을 도입하여 앱을 수월하게 개발하는 전략 -> redux
