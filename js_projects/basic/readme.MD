# 목표
    - js 문법 이해
        - 올드 버전 문법
        - 최신 문법

    - history

    - 구성 및 관계성
        - Javascript(1993~ )
        - ES5 : ECMAScript 5, 표준스크립트, 2009 발표
        - ESNext : ECMA 2015년부터 매년(1년주기) 발표(업그레이드, 변경), 새로운 표준안 발표, 문법 추가
            - ECMA 2015, ECMA 2016, ES6, ES7, ....
        - TypeScript : ESNext + Type(정수, 부동소수, 문자열, ... -> 오류를 줄이고, 명확성을 부여)
        - 범위
            - TypeScript(MS가 만들었지만, 구글이 확산시킴) > ESNext > ES5
            - TypeScript -> ESNext -> ES5 => 모든 브라우저 호환된다.
                - 현재 js쪽은 ES5로 가동된다.
                - TS -> transcompile(컴파일)을 하면 ESNext -> 처리(표준화):babel -> ES5 생성 -> 압축 -> webpack
                    * ES5로 생성했다면 webpack만, ESNext를 했다면 BABLE 후.. webpack 순으로..
                - trans compile 처리하여 사용 ( 상위 레벨로 작성 -> 하위 레벨로)
        - React
            - 1) ESNext 개발 -> ES5 호환처리
            - 2) TypeScript -> ESNext -> ES5