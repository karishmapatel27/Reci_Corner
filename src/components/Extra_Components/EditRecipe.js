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
            <Form.Control type="text" name="title" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formImage">
            <Form.Label>Image Url</Form.Label>
            <Form.Control type="text" name="image" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formCategory">
            <Form.Label>Category</Form.Label>
            <Form.Control type="text" name="category" />
          </Form.Group>
          <Form.Group className="mb-3" controlId="formyouTubeUrl">
            <Form.Label>YouTube URL</Form.Label>
            <Form.Control type="text" name="youTubeUrl" />
          </Form.Group>
          <Button variant="primary" type="submit" >
            Submit
          </Button>
        </Form>
      </div>
    </div>
  )
}

export default EditRecipe