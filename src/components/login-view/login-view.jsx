import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Card, CardGroup, Container, Col, Row } from "react-bootstrap/";


export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  // Declare hook for each input
  const [ usernameErr, setUsernameErr ] = useState('');
  const [ passwordErr, setPasswordErr ] = useState('');

// validate user inputs
  const validate = () => {
    let isReq = true;
    if(!username){
    setUsernameErr('Username Required');
    isReq = false;
    }else if(username.length < 2){
    setUsernameErr('Username must be 2 characters long');
    isReq = false;
    }
    if(!password){
    setPasswordErr('Password Required');
    isReq = false;
    }else if(password.length < 6){
    setPassword('Password must be 6 characters long');
    isReq = false;
    }

    return isReq;
  }

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if(isReq) {
      /* Send a request to the server for authentication */
    axios.post('https://electriccinema.herokuapp.com//login', {
        Username: username,
        Password: password
     })
      .then(response => {
        const data = response.data;
        props.onLoggedIn(data);
     })
      .catch(e => {
        console.log('no such user')
     });
    }
   };


  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <Card.Title>Welcome to Electric Cinema</Card.Title>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formUsername">
                    <Form.Label>Username:</Form.Label>
                    <Form.Control
                      type="text"
                      onChange={(e) => setUsername(e.target.value)}
                      required
                      placeholder="Enter your username"
                    />
                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label>Password:</Form.Label>
                    <Form.Control
                      type="password"
                      onChange={(e) => setPassword(e.target.value)}
                      minLength="5"
                      placeholder="Enter your password"
                    />
                  </Form.Group>

                  <Button variant="dark" type="submit" onClick={handleSubmit} >Submit</Button>

                  <Button variant="link" type="submit">Register</Button> 
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
}