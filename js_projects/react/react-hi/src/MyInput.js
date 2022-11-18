// 컴포넌트 구성, 사용자 입력을 받는 input 태그를 기반으로 구성
// 함수형? 클레스형?
// rsf
// 클라이언트에서 서버로 데이터를 보내는 방식
/**
 * form 전송 ( 처음부터 존재함 ) -> 클라이언트 요청 -> 서버응답
 * ajax 전송 ( 2005 구글맵 ) -> 클라이언트 요청 -> 서버응답
 * web socket 방식 ( html5부터 ), 쌍방향
 */

// 숫자만 입력 가능한 input 컴포넌트이다
// 함수형 컴포넌트에서 사용하는 상태변수
// 대표모듈은 그냥 이름으로, 일반 모듈은 객체 구조분해 모양으로 가져온다.
import React, { useState } from 'react';

// 함수형 컴포넌트
const MyInput = (props) => {
    // 상태변수 정의    ,, 14-15 작성 
    const [age, setAge] = useState('');       // age 사용하는것, setAge 수정하는것

    // 상태 변수로 사용자의 입력값을 저장하자 => state
    // 함수형 컴포넌트에서 state 사용 => Hooks(훅) => state 편하게 사용할 수 있도록 제공 (오직 함수형 컴포넌트만을 위해 Hook Hook)
    const onSubmit = (e) => {
        e.preventDefault();
        console.log(age); // 상단의 상태변수가 age라서 age로 사용
        setAge('');
    };
    const onChange = (e) => {
        console.log(e.target.value);
        const v = e.target.value.replace( /[^0-9]/g, '' );
        setAge(v);
      };
    // JSX리턴
    return (
        <div>
            <form onSubmit={ onSubmit }>
                <input type="text" placeholder="숫자만입력" value={age} onChange={onChange}/>
                <input type="submit" value="전송" />
            </form>
        </div>
    );
}

// 대표 ui
export default MyInput;