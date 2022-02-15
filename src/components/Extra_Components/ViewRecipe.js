import React from 'react'
import "./ViewRecipe.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'

const ViewRecipe = () => {
  return (
    <Container fluid="xs sm md" className="show-grid recipe_container">
      <Row className="row1">
        <Col xs={12} s={12} md={8}>
          <h3>Turkish Eggs</h3>
        </Col>
      </Row>
      <Row className="row2">
        <Col xs={12} s={12} md={5} className="r2_col1">
          <img src="../Image/Turkish-Eggs.jpg" alt="Turkish eggs"/>
        </Col>
        <Col xs={12} s={12} md={6} className="r2_col2">
          <h5>Total Time:</h5>
          <h5>Prep Time:</h5>
          <h5>Cooking Time:</h5>
        </Col>
      </Row>
    </Container>
  
  )
}

export default ViewRecipe