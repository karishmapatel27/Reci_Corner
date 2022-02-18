import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './RecipeCard.css'
// import { CgEye } from "react-icons/cg";
import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md"
import axios from "axios";

const RecipeCard = () => {
  const [recipes, setRecipes] = useState([])
  
  useEffect(() => {
      axios.get("http://localhost:3500/recipes")
      .then((response) => {
        setRecipes(response.data);
      })
  }, [])
  
const handleDelete = async (id) => {
    await axios.delete(`http://localhost:3500/recipes/${id}`);
    // creating new updated recipe list - updated state 
    var newRecipe = recipes.filter((item) => {
      return item.id !== id;
    })

    setRecipes(newRecipe);
}

  return (
    <>
      {
        recipes.map((recipe, i) => {
          return(
          <div className="recipe-card" key={i}>
            <Card style={{ width: '18rem' }}>
            <Link to={`/view/${recipe.id}`}>
            <Card.Img variant="top" src={recipe.image} />
            </Link>
            <Card.Body className="card_body">
            <div className="title">
            <Card.Title>{recipe.title}</Card.Title>
            </div>
            <div className="icons">
            <Link to={`/edit/${recipe.id}`}><MdOutlineModeEditOutline className="edit"/></Link>
            <MdDeleteOutline onClick={() => handleDelete(recipe.id)} className="delete"/>
            </div>
            </Card.Body>
            </Card>
          </div>
          )
        })
      }
    </>
  )
}

export default RecipeCard

//<Link to={`/view/${recipe.id}`}> <CgEye className="eye"/></Link>