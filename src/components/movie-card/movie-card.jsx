import React from 'react';
import PropTypes from 'prop-types';
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';

import { Link } from "react-router-dom";

export class MovieCard extends React.Component {
  render() {
    const { movie } = this.props;

    return (
      <Card>
        <Card.Img variant="top" src={movie.ImagePath} />
        <Card.Body>
          <Card.Title>{movie.Title}</Card.Title>
          <Card.Text>{movie.Description}</Card.Text>
          <Link to={`/movies/${movie._id}`}>
            <Button variant="dark">Open</Button>
          </Link>
        </Card.Body>
      </Card>
    );
  }
}

      MovieCard.propTypes = {
        movie: PropTypes.shape({
          Title: PropTypes.string.isRequired,
          Description: PropTypes.string.isRequired,
          ImagePath: PropTypes.string.isRequired,
          Genre: PropTypes.shape({
            Name: PropTypes.string.isRequired
          }),
          Director: PropTypes.shape({
            Name: PropTypes.string.isRequired
          }),
        }).isRequired,
        onMovieClick: PropTypes.func.isRequired
      };