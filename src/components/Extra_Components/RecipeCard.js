import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Card, Container, Row, Col} from 'react-bootstrap'
import './RecipeCard.css'
import axios from "axios";

const RecipeCard = () => {
  const [recipes, setRecipes] = useState([])
  
  useEffect(() => {
      axios.get("http://localhost:8080/api/v1/recipeContent")
      .then(response => {
        setRecipes(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("Something went wrong", error);
      })
  }, [])
  
const handleDelete = async (id) => {
    await axios.delete(`http://localhost:8080/api/v1/delete/${id}`);
    var newRecipe = recipes.filter((item) => {
      return item.id !== id;
    })

    setRecipes(newRecipe);
}

const handleUpdate = async (id) => {
    await axios.put(`http://localhost:8080/api/v1/recipeContent/${id}`);
}

  return (
      <Container className="card-container" fluid="md" >
        <Row>
          {
            recipes.map((recipe, i) => (
              <Col key={i} xs={12} md={6} lg={4}>
                  <Card style={{ width: '18rem' }} className="card">
                  <Link to={`/view/${recipe.id}`}>
                  <Card.Img variant="top" src={recipe.imageUrl} className="card-img" />
                  </Link>
                  <Card.Body className="card_body">
                  <div className="title">
                  <Card.Title>{recipe.recipeName}</Card.Title>
                  </div>
                  <div className="icons">
                  <Link to={`/edit/${recipe.id}`}>
                    <button className="watchRecipeBtn"> 
                        Update
                    </button>
                  </Link>
                  <button className="watchRecipeBtn" onClick={() => handleDelete(recipe.id)}>
                    Delete
                  </button>
                  </div>
                  </Card.Body>
                  </Card>
              </Col>
          ))}
        </Row>
      </Container>
    )
}

export default RecipeCard
