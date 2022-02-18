import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import "./Login.css"

const LogIn = () => {
  return (
    <div className="login_form">
    <Form>
      <Form.Group className="mb-3" controlId="formUser">
      <Form.Label>User name</Form.Label>
      <Form.Control type="email"/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
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

export default LogIn