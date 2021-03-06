import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import Form from "react-bootstrap/Form";
import { Button } from "react-bootstrap";
import "./AddRecipeForm.css";
import axios from "axios";

const AddRecipeForm = ({cookies}) => {
  const navigate = useNavigate();

const config =  {
    headers: {
      Authorization: cookies.get("Authorization"),
    }
  }


  const[recipe, setRecipe] = useState({
    recipeName: "",
    imageUrl: "",
    category: "",
    modification: "",
    youtubeLink: ""
  });

  function onTextFieldChange(e){
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    });
  }

  async function onFormSubmit(e){
    e.preventDefault()
    try{
        await axios.post(`/api/user/createRecipeContent`, recipe, config);
        setRecipe(recipe.data);
        navigate('/home');
    } catch(error){
        console.log("something went wrong!");
    }
  }

  return (
    <div className="addrecipe_form">
      <Form>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Recipe Title</Form.Label>
          <Form.Control type="text" name="recipeName"  onChange={e => onTextFieldChange(e)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImage">
          <Form.Label>Image Url</Form.Label>
          <Form.Control type="text" name="imageUrl"  onChange={e => onTextFieldChange(e)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" name="category" onChange={e => onTextFieldChange(e)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formModification">
          <Form.Label>Your Modification</Form.Label>
          <Form.Control type="text" name="modification" onChange={e => onTextFieldChange(e)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formyouTubeUrl">
          <Form.Label>youtubeLink</Form.Label>
          <Form.Control type="text" name="youtubeLink" onChange={e => onTextFieldChange(e)}/>
        </Form.Group>
        <Button className="addRecipeFormButton" type="submit" onClick={e => onFormSubmit(e)}>
          Add
        </Button>
        <Link to="/home">
          <Button className="addRecipeFormButton">
            Home
          </Button>
        </Link>
        </Form>
      </div>
  )
}

export default AddRecipeForm