import React, {PureComponent} from 'react';
import PropTypes from 'prop-types';
import MovieCard from '../movie-card/movie-card.jsx';

export default class MoviesList extends PureComponent {
  constructor(props) {
    super(props);
    this.state = {
      activeCardId: null,
    };

    this.handleActivateMovie = this.handleActivateMovie.bind(this);
    this.handleDisactivateMovie = this.handleDisactivateMovie.bind(this);
  }

  handleActivateMovie(id) {
    this.setState({
      activeCardId: id,
    })
  }

  handleDisactivateMovie() {
    this.setState({
      activeCardId: null,
    })
  }

  render() {
    const {movies, onClick} = this.props;
    return <div className="catalog__movies-list">
      {movies.map((movie) => <MovieCard key={movie.id} movieInfo={movie}
      onClick={() => onClick(movie.id)}
      onHover={this.handleActivateMovie}
      onSettle={this.handleDisactivateMovie}
      />)}
    </div>;
  }
}

MoviesList.propTypes = {
  movies: PropTypes.arrayOf(PropTypes.shape({
    id: PropTypes.any.isRequired,
    title: PropTypes.string.isRequired,
    poster: PropTypes.string.isRequired,
  })).isRequired,
  onClick: PropTypes.func.isRequired,
};