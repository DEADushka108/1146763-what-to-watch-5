import React, {useState} from 'react';
import PropTypes from 'prop-types';
import {TabNames} from '../../utils/const.js';

const Tabs = (props) => {
  const [activeItem, setActiveItem] = useState(TabNames.OVERVIEW);
  const {children} = props;

  return <div className="movie-card__desc">
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {children.map((child, index) => {
          const {title} = child.props;
          return <li key={`${title}-${index}`}
            className={`movie-nav__item ${(activeItem === title) ? `movie-nav__item--active` : ``}`}
            onClick={() => {
              setActiveItem(title);
            }}>
            <a className="movie-nav__link">{title}</a>
          </li>;
        })}
      </ul>
    </nav>
    {children.map((child) => {
      const {title, children: content} = child.props;

      return (title === activeItem) ? content : null;
    })}
  </div>;
};

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};

export default Tabs;
