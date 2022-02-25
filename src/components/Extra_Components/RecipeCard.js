import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Card, Container, Row, Col} from 'react-bootstrap'
import './RecipeCard.css'
import axios from "axios";

const RecipeCard = ({cookies}) => {
  const [recipes, setRecipes] = useState([])

const config =  {
    headers: {
      Authorization: cookies.get("Authorization"),
    }
  }

  useEffect(() => {
      axios.get("/api/user/recipeContent", config)
      .then(response => {
        setRecipes(response.data);
      })
      .catch(error => {
        console.log("Something went wrong", error);
      })
  }, [])
  
const handleDelete = async (id) => {
    await axios.delete(`/api/user/delete/${id}`, config);
    var newRecipe = recipes.filter((item) => {
      return item.id !== id;
    })
    setRecipes(newRecipe);
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
                    <button className="watchRecipeBtn updatebtn"> 
                        Update
                    </button>
                  </Link>
                  <button className="watchRecipeBtn deletebtn" onClick={() => handleDelete(recipe.id)}>
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
