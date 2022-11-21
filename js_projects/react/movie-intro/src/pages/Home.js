import React, { useState, useEffect } from "react";
import axios from "axios";
import Movie from "./Movie";
import "./Home.css";

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
    // 이 위치에 getMovies()를 작성하면 2번 호출되지만 아래 return(뒷정리함수)에 작성하면 1번 호출됨
    return () => {
      // 뒷정리함수, 상태값 변경되기 전에 호출
      // 조건식을 부여해서 컴포넌트가 사라질때도 호출되는 부분에 대한 처리 필요
      getMovies();
    };
  }, []);

  // JSX
  return (
    <div className="container">
      {isLoading ? (
        <div className="loader">로딩중입니다</div>
      ) : (
        <div className="movies">
          {movies.map((v, i) => {
            // return <img key={i} src={v.large_cover_image} width="100" />;
            return (
              <Movie
                key={i}
                id={v.id}
                title={v.title}
                year={v.year}
                summary={v.summary}
                poster={v.medium_cover_image}
                genres={v.genres}
              />
            );
          })}
        </div>
      )}
    </div>
  );
};

export default Home;
