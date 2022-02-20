import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Button, Row, Col } from 'react-bootstrap'
import './AddRecipeForm.css'
import axios from "axios";

const AddRecipeForm = () => {
  const[recipe, setRecipe] = useState({
    recipeName: "",
    imageUrl: "",
    category: "",
    modificaton: "",
    youtubeLink: ""
  });

  function onTextFieldChange(e){
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    })
    console.log(recipe);
  }

  async function onFormSubmit(e){
    e.preventDefault()
    try{
        await axios.post(`http://localhost:8080/api/v1/createRecipeContent`, recipe);
        setRecipe(recipe.data);
    } catch(error){
        console.log("something went wrong!")
    }
  }

  return (
    <div className="addrecipe_form">
    <Form>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Recipe Title</Form.Label>
            <Form.Control type="text" name="recipeName"  onChange={e => onTextFieldChange(e)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Image Url</Form.Label>
            <Form.Control type="text" name="imageUrl"  onChange={e => onTextFieldChange(e)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" name="category" onChange={e => onTextFieldChange(e)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formModification">
            <Form.Label>Your Modification</Form.Label>
            <Form.Control type="text" name="modificaton" onChange={e => onTextFieldChange(e)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formyouTubeUrl">
            <Form.Label>youtubeLink</Form.Label>
            <Form.Control type="text" name="youTubeUrl" onChange={e => onTextFieldChange(e)}/>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={e => onFormSubmit(e)}>
            Submit
          </Button>
        </Form>
      </div>
  )
}

export default AddRecipeForm