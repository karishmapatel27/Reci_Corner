import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button, Row, Col } from 'react-bootstrap'
import './AddRecipeForm.css'

const AddRecipeForm = () => {
  return (
    <div className="addrecipe_form">
    <Form>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrepTime">
            <Form.Label>Prep Time</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCookTime">
            <Form.Label>Cooking time</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formServings">
            <Form.Label>Servings</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
          <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formTngredients">
            <Form.Label>Ingredient</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
          <Form.Group as={Col}  className="mb-3" controlId="formQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="text"/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add
          </Button>
          </Row>
          <Form.Group className="mb-3" controlId="method">
            <Form.Label>Method</Form.Label>
            <Form.Control as="textarea" rows={8} />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
  )
}

export default AddRecipeForm