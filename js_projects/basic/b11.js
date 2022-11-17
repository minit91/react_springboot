// 배열 - 대표적인 js의 자료구조, 순서존재, 값중복 ok

// 생성
let arr = ['A', 'B']
console.log( "배열생성 =>", arr );


// 값 추출 -> 배열명[ index ]
console.log( "값 추출 =>", arr[0] )


// 배열 총길이
console.log( "배열 총길이 =>", arr.length )


// 순환접근   (arr.forEach() 괄호부분에 커서 가져다대면 사용하는 방법이 나온다.)
arr.forEach( (value, index, array) => {
    console.log( "값:",value, ", 위치:",index )
} )


// **map : 맴버를 하나씩 꺼내서 조작 후 리턴 -> map()
let data = arr.map( (value, index, array) => {
    return `${index}-${value}` 
} )
console.log( "map() =>", data ) // 배열을 조작해서 받으니까 배열이 나와야 한다.


// **filter : 맴버를 하나씩 꺼낸 후 걸러서 리턴 -> filter()
data = arr.filter( (value, index, array) => { // 특정 조건을 걸러내라(포함되는지 안되는지)
    // 짝수번째 데이터만 모은다(홀수는 걸러낸다)
    if( index % 2 == 0 ) return true
    return false                     // if, else로 해야하는데 값이 true 아니면 false라서 바로 return false를 한다.
} )
console.log( "너희가 짝수번째 데이터였구나?", data );

data = arr.filter( (value, index, array) => {
    if( index % 2 != 0) return true;
    return false
})
console.log("너흰 홀수니?", data)


// 배열 조작
// 배열의 끝에 맴버 추가하기
arr.push('C')
console.log( "C 추가 =>", arr )


// 배열의 맨앞 맴버 제거하기
console.log( "A 제거 =>", arr.shift() )
console.log( arr )


// 배열의 맨앞 맴버 추가하기
console.log( "A 추가 =>", arr.unshift('A') )
console.log( arr )


// 특정위치 맴버 제거하기
console.log( "첫번째 위치에서 2개 제거 =>", arr.splice(1,2) ) // 첫번째 위치에서 2개 제거
console.log( arr )             // B, C 제거하고 A가 남았다.