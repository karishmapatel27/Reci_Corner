import React from 'react'
import Form from 'react-bootstrap/Form'
import { Button, Row, Col, Table } from 'react-bootstrap'
import "./EditRecipe.css"
// import { CgEye } from "react-icons/cg";
import { MdDeleteOutline } from "react-icons/md"

const EditRecipe = () => {
  return (
    <div className="container">
      <div className="addrecipe_form">
        <h3>Update Recipe</h3>
        <Form>
          <Form.Group className="mb-3" controlId="formTitle">
            <Form.Label>Title</Form.Label>
            <Form.Control type="text" value="Turkish Egg"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formPrepTime">
            <Form.Label>Prep Time</Form.Label>
            <Form.Control type="text" value="20 Minutes"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCookTime">
            <Form.Label>Cooking time</Form.Label>
            <Form.Control type="text" value="20 Minutes"/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formServings">
            <Form.Label>Servings</Form.Label>
            <Form.Control type="text" value="2"/>
          </Form.Group>
          <Row className="mb-3">
          <Form.Group as={Col} className="mb-3" controlId="formTngredients">
            <Form.Label>Ingredient</Form.Label>
            <Form.Control type="text" value="Avocado"/>
          </Form.Group>
          <Form.Group as={Col}  className="mb-3" controlId="formQuantity">
            <Form.Label>Quantity</Form.Label>
            <Form.Control type="text" value="2"/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Add
          </Button>
          </Row>
          <Form.Group className="mb-3" controlId="method">
            <Form.Label>Method</Form.Label>
            <Form.Control as="textarea" rows={8} value="Step1: Since avocados start browning once they're cut, we're going to prepare everything else first."/>
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
      </div>
      <div className="ingredient-list">
          <Table striped bordered hover>
            <thead>
              <tr>
                <th>#</th>
                <th>Ingredient</th>
                <th>Quantity</th>
                <th>Action</th>
              </tr>
            </thead>
            <tbody>
              <tr>
                <td>1</td>
                <td>Avocado</td>
                <td>2</td>
                <td><div className="icons">
                    <MdDeleteOutline className="delete"/>
                    </div>
                </td>
              </tr>
            </tbody>
          </Table>
      </div>
    </div>
  )
}

export default EditRecipe