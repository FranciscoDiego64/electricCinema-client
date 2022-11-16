import React from 'react';
import PropTypes from 'prop-types';

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
            </div>
            <div className="movie-director-bio">
              <span className="label">About the director: </span>
              <span className="value">{movie.Director.Bio}</span>
            </div>
            <div className="movie-genre">
              <span className="label">Genre: </span>
              <span className="value">{movie.Genre.Name}</span>
            </div>
            <Button onClick={() => { onBackClick(null); }} variant="danger">Back</Button>{' '}
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
            Bio: PropTypes.string.isRequired,
            BirthYear: PropTypes.number.isRequired,
          }),
          Actors: PropTypes.array.isRequired,
          ImagePath: PropTypes.string.isRequired,
        }).isRequired,
      };
