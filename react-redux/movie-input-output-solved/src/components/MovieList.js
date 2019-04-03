import React, { Component } from 'react';
import { connect } from 'react-redux';
import { selectMovie } from "../actions";
import './MovieList.css';

class MovieList extends Component {
	render() {
		return (
			<div className="MovieList">
				<div className="movie-group">
					<h2>Movie list:</h2>
					<ul className="movies">
						{
							this.props.movies.map(movie => {
								return <li key={movie.Title} onClick={() => this.props.selectMovie(movie)}>{movie.Title}    {movie.Year}</li>
							})
						}
					</ul>
				</div>
			</div>
		);
	}
}

const mapStateToProps = (state) => {
	return {
		movies: state.movies
	}
}

export default connect(mapStateToProps, {selectMovie})(MovieList);