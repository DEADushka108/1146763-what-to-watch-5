import React, {useState, ReactElement} from 'react';
import {TabNames} from '../../utils/const';

interface Props {
  children: ReactElement[];
}

const Tabs = (props: Props) => {
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

export default Tabs;
