import React, { useState, useEffect } from 'react'
import { useParams, useNavigate } from "react-router-dom";
import Form from 'react-bootstrap/Form'
import { Button } from 'react-bootstrap'
import "./EditRecipe.css"
import axios from "axios";


const EditRecipe = ({cookies}) => {
  const {id} = useParams();
  const navigate = useNavigate();

  const config =  {
    headers: {
      Authorization: cookies.get("Authorization"),
    }
  }

  const[recipe, setRecipe] = useState({
    recipeName: "",
    imageUrl: "",
    category: {},
    modification: "",
    youtubeLink: ""
  });

  useEffect(() => {
      axios.get(`api/user/update/${id}`, config)
      .then((response) => {
        setRecipe(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.log("Something went wrong", error);
      })   
  }, [id]);

  function onTextFieldChange(e){
    setRecipe({
      ...recipe,
      [e.target.name]: e.target.value
    });
  }

  async function onFormSubmit(e){
    e.preventDefault()
      try{
          await axios.put(`/api/user/update`, recipe, config);
          setRecipe(recipe);
          navigate("/home");
      }catch(error){
          console.log("something went wrong!", error);
      }
  }

  function handleClick() {
    navigate('/home');
  }

  return (
    <div className="edit_form">
      <Form>
        <Form.Group className="mb-3" controlId="formTitle">
          <Form.Label>Recipe Title</Form.Label>
          <Form.Control type="text" name="recipeName" value={recipe.recipeName}  onChange={e => onTextFieldChange(e)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formImage">
          <Form.Label>Image Url</Form.Label>
          <Form.Control type="text" name="imageUrl" value={recipe.imageUrl}  onChange={e => onTextFieldChange(e)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formCategory">
          <Form.Label>Category</Form.Label>
          <Form.Control type="text" name="category" value={recipe.category.categoryName} onChange={e => onTextFieldChange(e)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formModification">
          <Form.Label>Your Modification</Form.Label>
          <Form.Control type="text" name="modification" value={recipe.modification} onChange={e => onTextFieldChange(e)}/>
        </Form.Group>
        <Form.Group className="mb-3" controlId="formyouTubeUrl">
          <Form.Label>youtubeLink</Form.Label>
          <Form.Control type="text" name="youtubeLink" value={recipe.youtubeLink} onChange={e => onTextFieldChange(e)}/>
        </Form.Group>
        <Button className="editBtn" type="submit" onClick={e => onFormSubmit(e)}>
          Edit
        </Button>
        <Button className="editBtn" onClick={handleClick}>
            Home
        </Button>
        </Form>
      </div>
  )
}

export default EditRecipe