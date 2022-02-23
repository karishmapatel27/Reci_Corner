import RecipeCard from '../Extra_Components/RecipeCard'
import { Link } from 'react-router-dom'
import "./Home.css"

const Home = ({cookies}) => {
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
        <RecipeCard cookies={cookies}/>
      </div>
    </>
  )
}

export default Home
