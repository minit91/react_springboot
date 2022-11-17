// ESNext에서 추가되거나, 변경된 문법 7
// ** 자바스크립트는 비동기처리가 기본 루틴
// 비동기 처리를 위해서 -> ** 콜백함수를 활용하여 순서를 맞춘다.
// -> 자꾸 진행이 되면 => 코드가 아주 깊어진다 -> 콜백헬이 발생
// 해결방안
/**
 * - Promise ~ then
 * - generator ~ yield
 * - async ~ await => 비동기적 코드를 동기적 코드로 변환 처리해서 사용(가장 많이 사용됨)
 *      - 통신, 디비 등등 엑세스 할 때
 */
// 파일 3개를 준비하여 순차적으로 읽어서 출력하는 코드를 작성 
// ex) a찍고 -> b찍고 -> c찍는 식으로 (a.txt, b.txt, c.txt 사용)

// js => FileSystem을 처리하는 모듈 => node에서 제공, npmjs.org 가면 전세계에서 제공
const fs = require('fs')

class Test {
    constructor() { // 생성자에서 파일을 정의
        this.FILE1 = './basic/a.txt'
        this.FILE2 = './basic/b.txt'
        this.FILE3 = './basic/c.txt'
    }
    toStr(src) {
        return new String(src).toString()
    }
    toStr2 = (src) => {
        return new String(src).toString()
    }
    toStr3 = function (src) {
        return new String(src).toString()
    }
    toStr4 = src => new String(src).toString()

    normal() {
        // 비동기 함수 => 처리 결과는 등록된 콜백함수를 호출하면서 전달된다.
        // 콜백함수의 1번 인자는 무조건 에러
        // FILE1 읽고 값 출력 -> FILE2를 읽고 마무리 -> FILE3 읽고 출력 : 이 순서는 유지
        console.log('1. 파일을 읽는다')
        fs.readFile(this.FILE1, (err, data) => {
            console.log(`2. ${this.FILE1} 파일을 다 읽었습니다 `, err, this.toStr(data))
            fs.readFile(this.FILE2, (err, data) => {
                console.log(`4. ${this.FILE2} 파일을 다 읽었습니다 `, err)    // 2개 복붙함 (콜벡헬/콜벡무덤이라고 한다)
                fs.readFile(this.FILE3, (err, data) => {
                    console.log(`5. ${this.FILE3} 파일을 다 읽었습니다 `, err)

                })
            })
        })
        console.log('3. 작업 종료')
    
    
    }
    
    //--- Promise 패턴 - 콜벡헬을 해결하기 위해서 사용한다고 생각하면 됨
    myPromise ( fileName ) {                                       // 1. Promise 정의
        // 비동기 함수를 Promise로 감싸서, 콜백을 통해 외부로 전달하겠금 구성
        return new Promise( ( cb ) => {
            fs.readFile( fileName, (err, data) => {
                cb( data ) //cb를 통해서 데이터를 전달하라
            } )
        } )
    }
    test_myPromise() {                                  // 2. 정의한 것을 사용하기 위해서 작성
        // Promise 패턴으로 만들어진 객체를 사용
        this.myPromise( this.FILE1 )
        .then( (data)=>{
            console.log( 'a.txt 읽었다 =>', this.toStr(data) )
            return this.myPromise( this.FILE2 )
        } )
        .then( (data)=>{
            console.log( 'b.txt 읽었다 =>' )
            return this.myPromise( this.FILE3 )
        } )
        .then( (data)=>{
            console.log( 'c.txt 읽었다 =>', this.toStr(data) )
        } )    
    }

    //--- **asyc ~ await 패턴(핵심)
    myPromise2 ( fileName ) {
        // 비동기 함수를 Promise로 감싸서, 콜백을 통해 외부로 전달하겠금 구성
        return new Promise( ( cb, reject ) => {
            fs.readFile( fileName, (err, data) => {
                cb( data )
            } )
        } )
    }
    // 비동기 함수 앞에는 await를 붙이고, 이를 감싸는 바깥쪽 함수는 async를 붙인다.
    //바깥쪽 함수        **toStr -> 변환
    async test () {
        console.log( this.toStr( await this.myPromise2(this.FILE1 ) ) )               
        await this.myPromise2(this.FILE2 )             
        console.log( this.toStr( await this.myPromise2(this.FILE3 ) ) )          
    }
}


let t = new Test()
t.normal()
t.test_myPromise()
t.test()

// 나는 나의길을 갈테니 너는 너의길을 가라 - 비동기