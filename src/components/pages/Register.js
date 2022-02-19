import React from 'react'
import Form from 'react-bootstrap/Form'
import { Row, Col } from 'react-bootstrap'
import "./Register.css"

const Register = () => {
  return (
    <div className="register_form">
    <Form>
    <Row className="mb-3">
      <Form.Group as={Col} className="mb-3" controlId="firstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text"/>
      </Form.Group>
      <Form.Group as={Col} className="mb-3" controlId="lastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text"/>
      </Form.Group>
    </Row>
      <Form.Group className="mb-3" controlId="userName">
      <Form.Label>User Name</Form.Label>
      <Form.Control type="text"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email"/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password"/>
      </Form.Group>

      <button className="registerButton" type="submit">
        Register
      </button>
    </Form>
    </div>
  )
}

export default Register