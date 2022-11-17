/**
 * Optional chaining
 *  - ?.
 *  - ??
 *  - 널 세이프 개념이 도입
 */

const A = {
    name: 'AA',
    proc: {
        id:'coding',
        msg: {
            code:'2001'
        }
    }
}
const B = {
    name: 'AA',
}
console.log( A.proc?.msg?.code )
console.log( B.proc?.msg?.code )  // ?를 붙임으로써 undefined를 리턴할 뿐 s/w 정상적으로 작동한다.
//console.log( B.proc.msg.code )    // ?를 붙이지 않으면 s/w 셧다운됨

/**
 * Nullish Coalescing Operator
 * - ??
 * - 조건식에서 사용
 */
// A && B, A || B
// 값대 값으로 가는 경우 조건식으로 처리(true/false)가 안된다.
console.log( 'AA' || 'hi' ) // AA
// null, '', 0, undefined => 조건식에서 false로 간주한다.
console.log( null || 'hi' )
console.log( '' || 'hi' )
console.log( 0 || 'hi' )

// 조건식으로 보지 않고 실제적인 비교 연산으로 보고 싶다면 => ??를 사용하면 된다.
console.log( 0 ?? 'hi' )