import axios from "axios"
import { useNavigate } from "react-router-dom"
import { use, useEffect, useState } from "react"
import { useParams } from "react-router-dom"
import Card from 'react-bootstrap/Card';
import ListGroup from 'react-bootstrap/ListGroup';

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

  return (
    
    <div>

      <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{recipe.title}</Card.Title>
        <Card.Text>
          {recipe.description}
        </Card.Text>
      </Card.Body>
      <ListGroup className="list-group-flush">
        <ListGroup.Item>Ingredients: <ul>
          {recipe.ingredients.map((ingredient,index) => (
            <li key={index}>{ingredient.name} - {ingredient.quantity}{ingredient.unit} </li>
          ))}
        </ul>
        </ListGroup.Item>
        <ListGroup.Item>Steps: {recipe.steps}</ListGroup.Item>
        <ListGroup.Item>Category : {recipe.category}</ListGroup.Item>
      </ListGroup>
      <Card.Body>
     <button type="button" className="btn btn-primary" onClick={()=>{navigate("/all-recipes")}}>
          Back to Recipe List
        </button>
      </Card.Body>
    </Card>
        
    </div>
     
      
  )
}
export default RecipeDetails