import React, { useState, useEffect } from "react";
import axios from "axios";

const Home = (props) => {
  // 상태변수
  // 1. 로딩상태(통신중인가? 화면처리중) : isLoading 또는 bLoading  (is이냐아니냐, b 불린)
  // 2. 영화 데이터 (배열(맴버들은 객체(json))) : movies

  const [isLoading, setIsLoading] = useState(true);
  const [movies, setMovies] = useState([]);

  // 영화 정보를 받는 함수
  const getMovies = async () => {
    // get방식으로 요청 -> 비동기적 -> Promise 패턴이 적용된 라이브러리
    let data = await axios.get(
      "https://yts-proxy.now.sh/list_movies.json?sort_by=rating"
    );
    let {
      data: {
        data: { movies },
      },
    } = data;
    console.log(movies);
    // 로딩 완료 처리
    setIsLoading(false);
    // 상태 변수에 저장
    setMovies(movies);
  };

  // 최초 1회만 호출
  useEffect(() => {
    getMovies();
  }, []);

  // JSX
  return (
    <div>
      {isLoading ? (
        <div>로딩중입니다</div>
      ) : (
        <div>
          {movies.map((v, i) => {
            return <img src={v.large_cover_image} width="100" />;
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
