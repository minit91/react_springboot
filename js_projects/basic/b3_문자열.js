// ESNext에서 추가되거나, 변경된 문법 2
// 자바타입 : 원시(primitive)타입(8개) + 참조(reference)타입(1개:무한대)
// 문자열 : 기존방식 '..', "..."
// 신규추가 : Template Literals => 새로운 기호를 도입 `(백틱)
//           여러줄 표현, 구조를 유지, 포멧팅 가능             

// 포맷팅 사용하기
/* 
현대자동차가 7세대 신형 그랜저인 ‘디 올 뉴 그랜저’를 공식 출시했다. 
디 올 뉴 그랜저는 과거부터 이어온 유산을 계승하면서도 새로운 시대의 
모빌리티로 전환되는 가치를 담아 777번적인 상품성을 완성했다.
*/
const name = '그랜저';
const age = 7;
const number = '777번';

// 기존방식
var t = "현대자동차가 7세대 신형 그랜저인 ‘디 올 뉴" + name + "’를 공식 출시했다. "
console.log( t )

// 신규방식
t = `
현대자동차가 ${age}세대 신형 그랜저인 ‘디 올 뉴 ${name}’ 공식 출시했다. 
디 올 뉴 ${name}는 과거부터 이어온 유산을 계승하면서도 새로운 시대의 
모빌리티로 전환되는 가치를 담아 ${number}적인 상품성을 완성했다.
`
console.log( t )


// 구조유지
/*
    로그인 sql 쿼리문

    select
    *
    from
        userTb1
    where
        uid = 'guest';
*/
let uid= 'guest'
let sql = `
    select
        *
    from
        userTb1
    where
        uid = '${uid}';
`
console.log( sql )


// 결론 : 문자열은 '', "", `` 3가지를 사용할 수 있다.