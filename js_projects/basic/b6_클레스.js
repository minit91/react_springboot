// ESNext에서 추가되거나, 변경된 문법 5
/**
 * 클레스 키워드를 사용하여 클레스 표현
 */

// 자기 자신의 객체 => this, self
class Human {
    // 생성자
    constructor ( name, age )  { //맴버변수 초기화
        // 맴버 변수 초기화, 선언이 없어도 초기화하면서 생성 가능하다.
        this.name = name        // 자바는 전역변수를 지정안하면 뻑남 (스크립트는 괜찮)
        this.age = age
    }
    // 맴버변수
    level = 1
    // 맴버함수
    info() {
        console.log( `${this.name}님의 나이는 ${this.age}입니다.` )
    }
    // 순수함수(pure, 맴버를 건드리지 않기 때문에 순수함수라 한다)
    add ( x, y ) {
        // 리턴 값은 ()로 묶어서 처리 가능
        return (x + y)
    }
}

let obj = new Human('점심', 1230)
console.log( obj )
obj.info()

// 상속 -> 부모클레스의 모든 유산을 그대로 사용가능, 재정의(override), 자식만의 변수/함수 추가
class XMan extends Human{
    // 생성자 재정의 - 부모에서 가져온 데이터를 재정의한다.
    constructor ( name, age, skill )  { 
        super(name, age)    // ** 부모생성자를 부를때 super를 사용한다.
        this.skill = skill  // 내가 추가할 것
    }
    // 함수 재정의 -> 부모의 함수 형태를 유재하면서 내용 재구성
    info() {
        super.info() // 부모에 존재하는 원래 함수 호출( 한번 사용해봄)
        console.log( `${this.name}님의 기술은 ${this.skill}입니다.` )
    }
    // 정적(static) 함수 -> 객체를 전달해서 사용, 순수함수 구성시 적합
    static info2( obj ){
        console.log( obj.name )
    }
} 
let x = new XMan('울버린', 100, '칼')
console.log( x ) 
x.info()        // 부모함수 + 재정의한 함수가 담긴 info 호출
XMan.info2( x ) // XMan(객체)을 전달받아서 정적함수 사용