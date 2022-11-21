// 모듈 가져오기
import React from "react";
// 상세 타입 지정시 사용
import PropTypes from "prop-types";
// css, 스타일지정
import "./Movie.css";
// 페이징 처리, 클릭하면 특정 페이지로 이동
import { Link } from "react-router-dom";

// 함수형 콤포넌트
// function Movie( props ) { 아래 표현은 props에서 전달한 모든 속성을 바로 분해해서 받는케이스
//  let { title, year, summary, poster, genres } = props
function Movie({ title, year, summary, poster, genres }) {
  return (
    <div className="movie">
      {/* {{ 실제 적용되는 최종코드를 묘사할때 사용 }}  */}
      <Link
        to={{
          // 클릭했을때 이동한 URL 주소(리액트상에서 App.js에서 정의한 URL중에 하나)
          pathname: "/detail",
          // 해당 페이지로 이동할때 들고갈 데이터
          // 키(임의):{값, ...}
          state1: { year, title, summary, poster, genres },
        }}
      >
        <img src={poster} alt={title} title={title} />
        <div className="movie__data">
          <h3 className="movie__title">{title}</h3>
          <h5 className="movie__year">{year}</h5>
          <ul className="movie__genres">
            {genres.map((genre, index) => {
              return (
                <li key={index} className="movie__genre">
                  {genre}
                </li>
              );
            })}
          </ul>
          {/* 요약 => 글이 기니까 180자까질 잘라서 ... 붙였다 */}
          <p className="movie__summary">{summary.slice(0, 180)}...</p>
        </div>
      </Link>
    </div>
  );
}

// 콤포넌트 사용시 속성에 대한 타입 제한
// 콤포넌트명.propTypes = {}
Movie.propTypes = {
  year: PropTypes.number.isRequired,
  title: PropTypes.string.isRequired,
  summary: PropTypes.string.isRequired,
  poster: PropTypes.string.isRequired,
  genres: PropTypes.arrayOf(PropTypes.string).isRequired,
};

// 대표 모듈 지정
export default Movie;
