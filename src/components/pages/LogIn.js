import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import axios from 'axios'
import "./Login.css"

const LogIn = ({cookies}) => {
  const[user, setUser] = useState({
    userName: "",
    password:""
  });

  function onTextFieldChange(e){
    setUser({
      ...user,
      [e.target.name]: e.target.value
    })
    console.log(user);
  }

  async function onFormSubmit(e){
    e.preventDefault()
    try{
        let result = await axios.post(`http://localhost:8080/api/auth/login`, user);
        cookies.set("Authorization", `Bearer ${result.data.jwttoken}`)
        console.log(result.data)
        setUser(user.data);
    } catch(error){
        console.log("something went wrong!")
    }
  }

  return (
    <div className="login_form">
    <Form>
      <Form.Group className="mb-3" controlId="formUser">
      <Form.Label>User name</Form.Label>
      <Form.Control type="text" name="userName" onChange={e => onTextFieldChange(e)}/>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control type="password" name="password" onChange={e => onTextFieldChange(e)}/>
      </Form.Group>
      <button className="loginButton" type="submit" onClick={e => onFormSubmit(e)}>
        Login
      </button>
    </Form>
    </div>
  )
}

export default LogIn