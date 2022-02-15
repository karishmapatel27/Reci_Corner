// import api from '../../api/posts'
import RecipeCard from '../Extra_Components/RecipeCard'
import { Button } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="addRecipeContainer">
        <Link to="/addrecipe">
          <Button variant="outline-success" className="addRecipeBtn"> 
            Add Recipe
          </Button>
        </Link>
      </div>
      <div>
          <RecipeCard />
      </div> 
    </>
  )
}

export default Home
