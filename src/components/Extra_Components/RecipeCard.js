import React, {useState, useEffect} from 'react'
import { Link } from 'react-router-dom'
import { Card } from 'react-bootstrap'
import './RecipeCard.css'
import { CgEye } from "react-icons/cg";
import { MdDeleteOutline, MdOutlineModeEditOutline } from "react-icons/md"
import axios from "axios";

const RecipeCard = () => {
  const [recipes, setRecipe] = useState([])
  useEffect(() => {
      getAllRecipe()
  })

  async function getAllRecipe(){
    try{
      const recipe = await axios.get("http://localhost:3500/recipes");
      setRecipe(recipe.data);
    } catch(error){
      console.log("Oops! something went wrong.")
    }
  }

  // const [image, setImage]

  return (
    <>
      {
        recipes.map((recipe, i) => {
          return(
          <div className="recipe-card" key={i}>
            <Card style={{ width: '18rem' }}>
            <Card.Img variant="top" src={recipe.image_path} />
            <Card.Body className="card_body">
            <div className="title">
            <Card.Title>{recipe.title}</Card.Title>
            </div>
            <div className="icons">
            <Link to="/view/1"> <CgEye className="eye"/></Link>
            <Link to="/edit/1"><MdOutlineModeEditOutline className="edit"/></Link>
            <MdDeleteOutline className="delete"/>
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