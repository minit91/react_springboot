// ESNext에서 추가되거나, 변경된 문법 6
/**
 * 모듈 가져오기, 모듈화
 *  - 남이 만든 모듈을 가져온다 => 모듈 가져오기
 *  - 여러 사람이 사용할 수 있게 기능을 제공한다 => 모듈화 ( 재사용성↑ 파일의 크기↓)
 * 
 * 문법
 *  - common.js 방식을 따르는 패턴
 *  - ES6(ESNExt중) 따르는 방식 존재 => react에서 사용
 *      - 단, node에서 특정 모듈을 설치하면 사용가능함. 
 *      - 리액트에서 확인
 */

// 모듈화 대상 (변수, 상수, 함수, 클레스)
// var name = '모라'
exports.name = '모라' // << exports를 함으로써 다른 곳에서 import 할 수 있다.
const PI = 3.14
function add(x,y) {
    return x+y
}
exports.adds = function (x,y) {
    return x+y
}
class A{}
// ES6 스타일로 가능
// 객체 리터럴 방식은 가능 -> 객체 코듈화(대표성)
module.exports.obj = {   // << 여러가지를 담을 떄!!
    name:'k'


}


