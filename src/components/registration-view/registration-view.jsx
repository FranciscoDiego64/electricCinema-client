import React, { useState } from 'react';
import PropTypes from "prop-types";

import { Form, Button, Card, CardGroup, Container, Col, Row, } from "react-bootstrap";

import './registration-view.scss';

export function RegistrationView(props) {
  const [ username, setUsername ] = useState('');
  const [ password, setPassword ] = useState('');
  const [ email, setEmail ] = useState('');
  const [ Birthday, setBirthday] = useState('');
  // Declare hook for each input
  
  const [usernameErr, setUsernameErr] = useState('');
  const [passwordErr, setPasswordErr] = useState('');
  const [emailErr, setEmailErr] = useState('');

  const validate = () => {
    let isReq = true;

    
    if (!username) {
      setUsernameErr('Username Required.');
      isReq = false;
    } else if (username.length < 4) {
      setUsernameErr('Username must be at least 4 characters long.');
      isReq = false;
    }
    if (!password) {
      setPasswordErr('Password required.');
    } else if (password.length < 7) {
      setPasswordErr("Password must be at least 7 characters long.");
      isReq = false;
    }
    if (!email) {
      setEmailErr('Email required.');
      isReq = false;
    } else if (email.indexOf("@") === -1) {
      setEmailErr('invalid email.');
      isReq = false;
    };

    return isReq;
  };

    const handleSubmit = (e) => {
      e.preventDefault();
      const isReq = validate();
      if (isReq) {
        axios
          .post('https://electriccinema.herokuapp.com/users', {
            Username: username,
            Password: password,
            Email: email,
            Birthday: birthday,
          })
          .then((res) => {
            const data = res.data;
            alert('Registration successful');
            window.open('/', '_self'); // '_self' is necessary so that the page will open in the current tab
          })
          .catch((e) => {
            console.error(e);
            alert('Unable to register');
          });
      }
    };

  return (
    <Container>
      <Row>
        <Col>
          <CardGroup>
            <Card>
              <Card.Title>Please Resgister</Card.Title>
              <Card.Body>
                <Form>
                  <Form.Group controlId="formUsername">
                    <Form.Label> Username: </Form.Label>
                    <Form.Control
                      type="text"
                      value={username}
                      onChange={(e) => setUsername(e.target.value)} />

                            {values.usernameErr && 
                       <p>{values.usernameErr}</p>}

                  </Form.Group>

                  <Form.Group controlId="formPassword">
                    <Form.Label> Password: </Form.Label>
                    <Form.Control
                      type="password"
                      value={password}
                      onChange={(e) => setPassword(e.target.value)} />

                             {values.passwordErr && 
                       <p>{values.passwordErr}</p>}

                  </Form.Group>

                  <Form.Group controlId="formEmail">
                    <Form.Label> Email: </Form.Label>
                    <Form.Control
                      type="email"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)} />

                              {values.emailErr && 
                       <p>{values.emailErr}</p>}

                  </Form.Group>

                  <Form.Group controlId="formBirthday">
                    <Form.Label> Birthday: </Form.Label>
                    <Form.Control
                      type="birthday"
                      value={birthday}
                      onChange={(e) => setBirthday(e.target.value)}
                      required
                      placeholder="DD-MM-YYYY"
                    />
                  </Form.Group>

                  <Button variant="primary" type="submit" onClick={handleSubmit}>Register</Button>
                </Form>
              </Card.Body>
            </Card>
          </CardGroup>
        </Col>
      </Row>
    </Container>
  );
 }
  
 RegistrationView.propTypes = {
  register: PropTypes.shape({
    username: PropTypes.string.isRequired,
    password: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
  }),
};