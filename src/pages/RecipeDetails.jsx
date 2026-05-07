import axios from "axios"
import { useNavigate } from "react-router-dom"
import { use, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';
import { ToggleButton} from 'react-bootstrap';
import "../images/CardSample.png"



function RecipeDetails() {

  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

  
  
  useEffect(() => {
    getData();
  }, []);
  
  // function to get recipe details from the database
  const getData = async () => {
    try { 
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/recipes/${recipeId}`);
      setRecipe(response.data);
    } catch (error) {
      console.error(error)}
  };

  if(!recipe) return <h3>Loading...</h3>

  const deleteRecipe = async () => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/recipes/${recipeId}`);
      console.log("deleted!", response.data);
      navigate("/all-recipes");
    } catch (error) {
      console.log(error);
    }
  };

  return (
    
    <div>

      <Card style={{ width: '30rem', margin: '2rem auto', boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' }}>
      <Card.Img variant="top" src="./src/images/CardSample.png" />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title> 
       {recipe.favChecked ? "❤️" : "💔" }
       
        <Card.Text>
          {recipe.description}
        </Card.Text>
      </Card.Body>
       <ListGroup.Item style={{display:"flex", flexDirection:"row" , justifyContent:"space-evenly"}}>
      <ListGroup.Item>Preperation time: {recipe.preperationTime}</ListGroup.Item>
      <ListGroup.Item>Cooking time: {recipe.cookingTime}</ListGroup.Item>
      <ListGroup.Item>Total time: {Number(recipe.preperationTime) + Number(recipe.cookingTime)}</ListGroup.Item>
      </ListGroup.Item>

      <ListGroup className="list-group-flush" >
        <ListGroup.Item style={{display:"flex",justifyContent:"left"}}><b>Ingredients:</b> 
         <ul style={{display:"flex",justifyContent:"left", flexDirection:"column", alignContent:"center" }}>
          {recipe.ingredients.map((ingredient,index) => (
            
            <li key={index}>{ingredient.name} - {ingredient.quantity}{ingredient.unit} </li>
          ))}
       </ul>
        </ListGroup.Item>
        <ListGroup.Item style={{display:"flex",justifyContent:"left"}}><b>Steps:</b> {recipe.steps}</ListGroup.Item>
        <ListGroup.Item style={{display:"flex",justifyContent:"left"}}><b>Category: </b>{recipe.category}</ListGroup.Item>
      <ListGroup.Item style={{display:"flex",justifyContent:"left"}} ><b>Created by:</b> {recipe.source}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
     <button style={{ margin: "0.5rem" }} type="button" className="btn btn-secondary" onClick={()=>{navigate("/all-recipes")}}>
          Back
        </button>
       <button style={{ margin: "0.5rem" }} type="button" className="btn btn-primary" onClick={()=>{navigate("/edit-recipe/"+recipeId)}}>
          edit
        </button>
         <button style={{ margin: "0.5rem" }} type="button" className="btn btn-danger" onClick={deleteRecipe}>
          delete
        </button>
      </Card.Body>
    </Card>
        
    </div>
     
      
  )
}
export default RecipeDetails