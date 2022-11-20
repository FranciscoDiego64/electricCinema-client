import React, { useState } from 'react';
import PropTypes from "prop-types";
import { Link } from 'react-router-dom';


import { Form, Button, Card, CardGroup, Container, Col, Row, } from "react-bootstrap";

import './registration-view.scss';

export default function RegistrationView(props) {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [email, setEmail] = useState("");
  const [birthday, setBirthday] = useState("");
  // declare hooks for each input
  const [usernameErr, setUsernameErr] = useState("");
  const [passwordErr, setPasswordErr] = useState("");
  const [emailErr, setEmailErr] = useState("");

  const validate = () => {
    let isReq = true;

    if (!username) {
      setUsernameErr("Username Required.");
      isReq = false;
    } else if (username.length < 5) {
      setUsernameErr("Username must be at least 5 characters long.");
      isReq = false;
    }
    if (!password) {
      setPasswordErr("Password required.");
    } else if (password.length < 6) {
      setPasswordErr("Password must be at least 6 characters long.");
      isReq = false;
    }
    if (!email) {
      setEmailErr("Email required.");
      isReq = false;
    } else if (email.indexOf("@") === -1) {
      setEmailErr("invalid email.");
      isReq = false;
    }

    return isReq;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const isReq = validate();
    if (isReq) {
      axios
        .post("https://electriccinema.herokuapp.com/users", {
          Username: username,
          Password: password,
          Email: email,
          Birthday: birthday,
        })
        .then((response) => {
          const data = response.data;
          console.log(data);
          alert("Registration successful");
          window.open("/", "_self"); // '_self' opens '/' in the current tab
        })
        .catch((err) => {
          console.log(err);
          alert("Unable to register...");
        });
    }
  };

  return (
    <Container className='registration'>
    <Row>
      <Col className='d-flex justify-content-center '>
        <Card className='cardWidth'>
          <Card.Body>
            <Card.Title className='text-center mb-4'>Sign Up</Card.Title>
            <Form>
              <Form.Group>
                <Form.Label className='mt-2'>Username:</Form.Label>
                <Form.Control
                  id='round-form'
                  type='text'
                  value={username}
                  onChange={(e) => setUsername(e.target.value)}
                  placeholder='Enter a username'
                />
                {usernameErr && <p>{usernameErr}</p>}
              </Form.Group>
              <Form.Group>
                <Form.Label className='mt-2'>Password:</Form.Label>
                <Form.Control
                  id='round-form'
                  placeholder='Enter password'
                  type='password'
                  value={password}
                  onChange={(e) => setPassword(e.target.value)}
                />
                {passwordErr && <p>{passwordErr}</p>}
              </Form.Group>
              <Form.Group>
                <Form.Label className='mt-2'>Email:</Form.Label>
                <Form.Control
                  id='round-form'
                  type='email'
                  placeholder='Enter email'
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                />
                {emailErr && <p>{emailErr}</p>}
              </Form.Group>
              <Form.Group>
                <Form.Label className='mt-2'>Birthday:</Form.Label>
                <Form.Control
                  id='round-form'
                  type='date'
                  name='birthday'
                  placeholder='DD/MM/YYYY'
                  value={birthday}
                  onChange={(e) => setBirthday(e.target.value)}
                />
              </Form.Group>
              <div className='d-grid gap-2 mt-4'>
                <Button
                  className='d-flex justify-content-center'
                  variant='primary'
                  type='submit'
                  onClick={handleSubmit}
                >
                  Register
                </Button>
              </div>
              <p></p>
              Already registered? <br />
              <Button href={"/"} className='mt-3'>
                Sign in
              </Button>
            </Form>
          </Card.Body>
        </Card>
      </Col>
    </Row>
  </Container>
);
}

RegistrationView.propTypes = {
  register: PropTypes.shape({
    Username: PropTypes.string.isRequired,
    Password: PropTypes.string.isRequired,
    Email: PropTypes.string.isRequired,
 }),
};