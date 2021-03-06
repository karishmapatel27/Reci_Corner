import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Row, Col } from 'react-bootstrap'
import "./Register.css"
import { Link, useNavigate } from "react-router-dom"
import axios from 'axios';

const Register = () => {
  const navigate = useNavigate();
  const[user, setUser] = useState({
    firstName: "",
    lastName:"",
    email:"",
    userName:"",
    password: ""
  });

  function onTextFieldChange(e){
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
  }

  async function onFormSubmit(e){
    e.preventDefault()
    try{
        await axios.post(`/api/auth/register`, user);
        setUser(user.data);
        navigate("/")
    } catch(error){
        console.log("something went wrong!")
    }
  }


  return (
    <div className="register_form">
    <Form action="post">
    <Row className="mb-3">
      <Form.Group as={Col} className="mb-3" controlId="firstName">
      <Form.Label>First Name</Form.Label>
      <Form.Control type="text" name="firstName" onChange={e => onTextFieldChange(e)}/>
      </Form.Group>
      <Form.Group as={Col} className="mb-3" controlId="lastName">
      <Form.Label>Last Name</Form.Label>
      <Form.Control type="text" name="lastName" onChange={e => onTextFieldChange(e)}/>
      </Form.Group>
    </Row>
      <Form.Group className="mb-3" controlId="formBasicEmail">
      <Form.Label>Email address</Form.Label>
      <Form.Control type="email" name="email" onChange={e => onTextFieldChange(e)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicUserName">
      <Form.Label>User Name</Form.Label>
      <Form.Control type="text" name="userName" onChange={e => onTextFieldChange(e)}/>
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={e => onTextFieldChange(e)}/>
      </Form.Group>
      <Link to="/">
      <button className="registerButton" type="submit"  onClick={e => onFormSubmit(e)}>
        Register
      </button>
      </Link>
    </Form>
    </div>
  )
}

export default Register