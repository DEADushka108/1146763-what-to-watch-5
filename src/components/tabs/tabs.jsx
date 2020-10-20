import React from 'react';
import PropTypes from 'prop-types';


const Tabs = (props) => {
  const {children, activeItem, onActiveItemChange} = props;

  return <div className="movie-card__desc">
    <nav className="movie-nav movie-card__nav">
      <ul className="movie-nav__list">
        {children.map((child, index) => {
          const {title} = child.props;
          return <li key={`${title}-${index}`}
            className={`movie-nav__item ${(activeItem === index) ? `movie-nav__item--active` : ``}`}
            onClick={() => {
              onActiveItemChange(index);
            }}>
            <a className="movie-nav__link">{title}</a>
          </li>;
        })}
      </ul>
    </nav>
    {children.map((child, index) => {
      const {children: content} = child.props;

      return index === activeItem ? content : null;
    })}
  </div>;
};

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
  activeItem: PropTypes.number.isRequired,
  onActiveItemChange: PropTypes.func.isRequired,
};

export default Tabs;
