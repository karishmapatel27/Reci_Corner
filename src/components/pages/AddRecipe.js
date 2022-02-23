import "./AddRecipe.css"
import AddRecipeForm  from '../Extra_Components/AddRecipeForm'

const AddRecipe = ({cookies}) => {
  return (
    <div className="container">
      <AddRecipeForm cookies={cookies}/>
    </div>
  )
}

export default AddRecipe