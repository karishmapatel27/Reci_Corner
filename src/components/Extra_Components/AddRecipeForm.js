import React, { useState } from 'react'
import Form from 'react-bootstrap/Form'
import { Button, Row, Col } from 'react-bootstrap'
import './AddRecipeForm.css'
import axios from "axios";

const AddRecipeForm = () => {
  const[recipe, setRecipe] = useState({
    title: "",
    image:"",
    totalTime: "",
    prepTime: "",
    cookingTime: "",
    noOfServings: "",
    ingredients: [],
    method: ""
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
        await axios.post(`http://localhost:3500/recipes`, recipe);
        setRecipe(recipe.data);
    } catch(error){
        console.log("something went wrong!")
    }
  }

  return (
    <div className="addrecipe_form">
    <Form>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" name="title"  onChange={e => onTextFieldChange(e)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Image Url</Form.Label>
            <Form.Control type="text" name="image"  onChange={e => onTextFieldChange(e)}/>
          </Form.Group>
           <Form.Group className="mb-3" controlId="formTotalTime">
            <Form.Label>Total Time</Form.Label>
            <Form.Control type="text" name="totalTime" onChange={e => onTextFieldChange(e)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrepTime">
            <Form.Label>Prep Time</Form.Label>
            <Form.Control type="text" name="prepTime" onChange={e => onTextFieldChange(e)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCookTime">
            <Form.Label>Cooking time</Form.Label>
            <Form.Control type="text" name="cookingTime" onChange={e => onTextFieldChange(e)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formServings">
            <Form.Label>Servings</Form.Label>
            <Form.Control type="text" name="noOfServings" onChange={e => onTextFieldChange(e)}/>
          </Form.Group>
          <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formTngredients">
            <Form.Label>Ingredients</Form.Label>
            <Form.Control type="text" name="ingredients" onChange={e => onTextFieldChange(e)}/>
          </Form.Group>
            <Button variant="primary" type="submit">
            Add
          </Button>
          </Row>
          <Form.Group className="mb-3" controlId="method">
            <Form.Label>Method</Form.Label>
            <Form.Control as="textarea" rows={8}  name="method" onChange={e => onTextFieldChange(e)}/>
          </Form.Group>
          <Button variant="primary" type="submit" onClick={e => onFormSubmit(e)}>
            Submit
          </Button>
        </Form>
      </div>
  )
}

export default AddRecipeForm