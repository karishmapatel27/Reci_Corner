import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import "./Register.css"

const Register = () => {
  return (
    <div className="register_form">
    <Form>
      <Form.Group className="mb-3" controlId="formName">
      <Form.Label>Name</Form.Label>
      <Form.Control type="text"/>
      </Form.Group>
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

      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
    </div>
  )
}

export default Register