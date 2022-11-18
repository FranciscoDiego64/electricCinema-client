import React from 'react';
import axios from 'axios';

//import { RegistrationView } from '../registration-view/registration-view'; 
import { LoginView } from '../login-view/login-view';
import { MovieCard } from '../movie-card/movie-card';
import { MovieView } from '../movie-view/movie-view';

import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { Navbar, Nav, Container, Button } from 'react-bootstrap';

export class MainView extends React.Component {

  constructor(){
    super();
    // Initial state is set to null
    this.state = {
      movies: [],
      selectedMovie: null,
      user: null,
    };
  }

  componentDidMount(){
    let accessToken = localStorage.getItem('token');
    if (accessToken !== null) {
      this.setState({
        user: localStorage.getItem('user')
      });
      this.getMovies(accessToken);
    }
  }
 //When a movie is clicked, this function is invoked and updates the state of the `selectedMovie` *property to that movie
  setSelectedMovie(newSelectedMovie) {
    this.setState({
      selectedMovie: newSelectedMovie
    });
  }
  // on successful registration
  /*onRegistration(register) {
    this.setState({
      register,
    });
  } */

  // When a user successfully logs in, this function updates the `user` property in state to that *particular user

  onLoggedIn(authData) {
    console.log(authData);
    this.setState({
      user: authData.user.Username
    });
  
    localStorage.setItem('token', authData.token);
    localStorage.setItem('user', authData.user.Username);
    this.getMovies(authData.token);
  }

  getMovies(token) {
    axios.get('https://electriccinema.herokuapp.com/movies', {
      headers: { Authorization: `Bearer ${token}`}
    })
    .then(response => {
      // Assign the result to the state
      this.setState({
        movies: response.data
      });
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  onLoggedOut() {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    this.setState({
      user: null
    });
  }
  

  render() {
    const { movies, selectedMovie, user } = this.state;

    // if (!register) return (<RegistrationView onRegistration={(register) => this.onRegistration(register)}/>);

// If there is no user, the LoginView is rendered. If there is a user logged in, the user details are *passed as a prop to the LoginView
    if (!user) return <LoginView onLoggedIn={user => this.onLoggedIn(user)} />;


 // Before the movies have been loaded
    if (movies.length === 0) return <div className="main-view" />;

    return (
    <Row className="main-view justify-content-md-center">
        {selectedMovie ? (
          <Col md={8}>
            <MovieView
              movie={selectedMovie}
              onBackClick={(newSelectedMovie) => {
                this.setSelectedMovie(newSelectedMovie);
              }}
            />
          </Col>
        ) : (
          movies.map((movie) => (
            <Col md={3}>
              <MovieCard
                key={movie._id}
                movie={movie}
                onMovieClick={(newSelectedMovie) => {
                  this.setSelectedMovie(newSelectedMovie);
                }}
              />
            </Col>
          ))
        )}
        <Button variant="danger" type="submit" onClick={() => { this.onLoggedOut() }}>Logout</Button>
      </Row>
    );
  }
}