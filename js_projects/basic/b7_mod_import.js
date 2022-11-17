/**
 * b7 모듈을 가져와서 사용하는 코드
 */

// node = require()
let mod = require('./b7')

// b7에서 모듈을 가져와서 객체 구조를 분해
let {name, adds, obj} = require('./b7')
console.log( name )