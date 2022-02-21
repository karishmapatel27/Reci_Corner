import RecipeCard from '../Extra_Components/RecipeCard'
import { Link } from 'react-router-dom'
import "./Home.css"

const Home = () => {
  return (
    <>
      <div className="addRecipeContainer">
        <Link to="/addrecipe">
          <button className="addRecipeBtn button"> 
            Add Recipe
          </button>
        </Link>
      </div>
      <div>
        <RecipeCard/>
      </div>
    </>
  )
}

export default Home
