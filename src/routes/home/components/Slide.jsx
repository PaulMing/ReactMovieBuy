import React from 'react';
import PropTypes from 'prop-types';
import Slider from 'react-slick';//[该组件需下载css]
import './Slide.css';

// 首页 -> slide轮播图
const PosterSlide = ({ data }) => {
  const settings = {
    dots: true,
    autoplay: true,
    className: 'posterSlide',
    dotsClass: 'posterSlide__dots'
  };

  return (
    <Slider {...settings} >
      {
        data.map(item => (
          <div key={item.image}>
            <img className="posterSlide__image" src={item.image} alt=""/>
          </div>
        ))
      }
    </Slider>
  );
};
// PosterSlide.propTypes = {
//   data: PropTypes.array.isRequired,
// }

export default PosterSlide;
