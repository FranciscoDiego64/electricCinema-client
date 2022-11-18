import React, { useState } from 'react';
import axios from 'axios';
import { Form, Button, Card, CardGroup, Container, Col, Row } from "react-bootstrap/";


export function LoginView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');

  const handleSubmit = (e) => {
    e.preventDefault();
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