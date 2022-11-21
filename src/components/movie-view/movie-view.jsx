import React from 'react';
import PropTypes from 'prop-types';
import { Link } from "react-router-dom";

import { Button } from "react-bootstrap";


export class MovieView extends React.Component {
    
    render() {
        const { movie, onBackClick} = this.props;

        return (
          <div className="movie-view">
          <div className="movie-poster">
            <img src={movie.ImagePath} />
          </div>
          <div className="movie-title">
            <span className="label">Title: </span>
            <span className="value">{movie.Title}</span>
          </div>
          <div className="movie-description">
            <span className="label">Description: </span>
            <span className="value">{movie.Description}</span>
          </div>
          <div className="movie-director">
            <span className="label">Director: </span>
            <span className="value">{movie.Director.Name}</span>
          <div>
            <Link to={`/directors/${movie.Director.Name}`}>
              <Button variant="link">Learn more about the director</Button>
            </Link>
          </div>
          </div>
         
          <div className="movie-genre">
            <span className="label">Genre: </span>
            <span className="value">{movie.Genre.Name}</span>
          <div>
          <Link to={`/genres/${movie.Genre.Name}`}>
              <Button variant="link">Learn more about the genre</Button>
          </Link>
          </div>
          </div>
          <Button onClick={() => { onBackClick(null); }} variant="dark">Back</Button>{' '}
          </div>
      );
    }
  }

  MovieView.propTypes = {
      movie: PropTypes.shape({
        Title: PropTypes.string.isRequired,
        Description: PropTypes.string.isRequired,
        Genre: PropTypes.shape({
          Name: PropTypes.string.isRequired,
          Description: PropTypes.string.isRequired
        }),
        Director: PropTypes.shape({
          Name: PropTypes.string.isRequired,
        }),
        Actors: PropTypes.array.isRequired,
        ImagePath: PropTypes.string.isRequired,
      }).isRequired,
    };