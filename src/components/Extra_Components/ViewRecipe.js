import React, {useState, useEffect} from 'react'
import { useParams } from "react-router-dom"
import "./ViewRecipe.css"
import Container from 'react-bootstrap/Container'
import Row from 'react-bootstrap/Row'
import Col from 'react-bootstrap/Col'
import axios from 'axios'

const ViewRecipe = () => {
  const {id} = useParams();
  const [recipe, setRecipe] = useState([]);;
  
  useEffect(() => {
      let mounted = true;
      axios.get(`http://localhost:8080/api/v1/recipeContent/${id}`)
      .then((response) => {
        if(mounted){
          setRecipe(response.data);
        }
      })
      return() => {
        mounted = false;
      }
  }, [id]);

return (
    <Container fluid="xs sm md" className="show-grid recipe_container">
      <Row className="row1">
        <Col xs={12} s={12} md={8}>
          <h3>{recipe.recipeName}</h3>
        </Col>
      </Row>
      <Row className="row2">
        <Col xs={12} s={12} md={6} className="r2_col1">
            <img src={recipe.imageUrl} style={{ width: '350px', height: '250px' }} alt="recipe_pic"/>
        </Col>
      </Row>
      <Row className="row3">
        <Col xs={12} s={12} md={6} className="r2_col2">
          <h5>Category: {recipe.category} </h5>
          <h5>Modification: {recipe.modificaton} </h5>
          <h5>YouTube Url: <a href={recipe.youtubeLink} rel="noreferrer" target="_blank" >View</a></h5>
        </Col>
      </Row>
    </Container>
  
  )
}

export default ViewRecipe