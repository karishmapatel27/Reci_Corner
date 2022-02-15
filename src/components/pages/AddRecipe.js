import "./AddRecipe.css"
import AddRecipeForm  from '../Extra_Components/AddRecipeForm'
import IngredientsTable from '../Extra_Components/IngredientsTable'

const AddRecipe = () => {
  return (
    <div className="container">
        <AddRecipeForm/>
        <IngredientsTable/>
    </div>
  )
}

export default AddRecipe