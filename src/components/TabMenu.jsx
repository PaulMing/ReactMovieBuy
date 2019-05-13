import React from 'react';
import PropTypes from 'prop-types';
import { Link } from 'react-router-dom';
import './TabMenu.css';

// 公共TabMenu
// current -> 决定选中样式
const TabMenu = ({ current }) => {
  return (
    <div className="tabMenu">
      <Link to="/" className={`tabMenu__btn ${current === 'movie' && 'tabMenu__btn--active'}`}>
        <i className="tabMenu__icon tabMenu__icon--movie" />
        <span className="tabMenu__text">电影</span>
      </Link>
      <Link to="/user" className={`tabMenu__btn ${current === 'user' && 'tabMenu__btn--active'}`}>
        <i className="tabMenu__icon tabMenu__icon--user" />
        <span className="tabMenu__text">我的</span>
      </Link>
    </div>
  );
};

// TabMenu.propTypes = {
//   current: PropTypes.string.isRequired
// };

export default TabMenu;
