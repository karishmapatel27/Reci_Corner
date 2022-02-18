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
      axios.get(`http://localhost:3500/recipes/${id}`)
      .then((response) => {
        if(mounted){
          setRecipe(response.data);
        }
      })
      return() => {
        mounted = false;
      }
  }, [id]);

console.log(recipe.ingredients);
const ingredient = recipe.ingredients&&recipe.ingredients.map((item) => {
            return(   
                <ul key={item}>
                  <li>{item}</li>
                </ul>
            )
          })

return (
    <Container fluid="xs sm md" className="show-grid recipe_container">
      <Row className="row1">
        <Col xs={12} s={12} md={8}>
          <h3>{recipe.title}</h3>
        </Col>
      </Row>
      <Row className="row2">
        <Col xs={12} s={12} md={6} className="r2_col1">
            <img src={recipe.image} style={{ width: '350px', height: '250px' }} alt="recipe_pic"/>
        </Col>
        <Col xs={12} s={12} md={6} className="r2_col2">
          <h5>Total Time: {recipe.totalTime} </h5>
          <h5>Prep Time: {recipe.prepTime}</h5>
          <h5>Cooking Time: {recipe.cookingTime}</h5>
          <h5>Serving: {recipe.noOfServings}</h5>
        </Col>
      </Row>
      <Row className="row3">
        <Col xs={12} s={12} md={8}>
          <h3>Ingredients:</h3>
          <div>
            {ingredient}
          </div>
        </Col>
      </Row>
      <Row className="row4">
        <Col xs={12} s={12} md={8}>
          <h3>Method:</h3>
          <div>
            <p>{recipe.method}</p>
          </div>
        </Col>
      </Row>
    </Container>
  
  )
}

export default ViewRecipe