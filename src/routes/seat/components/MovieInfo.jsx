import React from 'react';
import './MovieInfo.css';

// 购票选座页面 -> 头部片名
const MovieInfo = () => {
  return (
    <div className="seatMovieInfo">
      <div className="seatMovieInfo__title">唐人街探案2</div>
      <div className="seatMovieInfo__info">今天 05-01 14:30 (国语2D) </div>
    </div>
  );
};

export default MovieInfo;
