import React, { useEffect } from "react";

const Detail = (props) => {
  useEffect(() => {
    return () => {
      // 컴포넌트가 생성되고 단 1회 호출되는 지점
      const { location, history } = props;
      // 상세페이지는 왔지만 값이 없다
      if (location.state1 === undefined) {
        // 홈페이지로 이동, 코드 레벨에서 특정페이지 이동처리
        history.push("/");
      }
    };
  }, []);
  return (
    <div>
      상세페이지 : {props.location.state1 ? props.location.state1.title : null}
    </div>
  );
};

export default Detail;
