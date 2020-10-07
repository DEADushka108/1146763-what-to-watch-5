import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';


export default class Tabs extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeTab: 0,
    };

    this.handleTabClick = this.handleTabClick.bind(this);
  }

  handleTabClick(index) {
    this.setState({
      activeTab: index,
    });
  }

  render() {
    const {children} = this.props;
    const {activeTab} = this.state;

    return <div className="movie-card__desc">
      <nav className="movie-nav movie-card__nav">
        <ul className="movie-nav__list">
          {children.map((child, index) => {
            const {title} = child.props;

            return <li key={`${title}-${index}`}
              className={`movie-nav__item ${(activeTab === index) ? `movie-nav__item--active` : ``}`}
              onClick={() => {
                this.handleTabClick(index);
              }}>
              <a className="movie-nav__link">{title}</a>
            </li>;
          })}
        </ul>
      </nav>
      {children.map((child, index) => {
        const {children: content} = child.props;

        return index === activeTab ? content : null;
      })}
    </div>;
  }
}

Tabs.propTypes = {
  children: PropTypes.oneOfType([
    PropTypes.arrayOf(PropTypes.node),
    PropTypes.node,
  ]).isRequired,
};
