import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import ToggleButton from 'react-bootstrap/ToggleButton';
import {useState} from 'react';
import axios from 'axios';

function RecipeCard(props) {
   
    const [favChecked, setFavChecked] = useState(props.recipe.isFavorite);
    const navigate = useNavigate();

    const deleteRecipe = async (recipeId) => {
    try {
      const response = await axios.delete(`${import.meta.env.VITE_SERVER_URL}/recipes/${recipeId}`);
      console.log("deleted!", response.data);
      navigate("all-recipes");
    } catch (error) {
      console.log(error);
    }
  };


  return (
 <div style={{display:'flex',flexWrap:'wrap'}}>
          <Card style={{ width: '18rem' ,margin: '1rem' , boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' , height: '100%' }}> 
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{props.recipe.title}</Card.Title>
        <Card.Text>
          {props.recipe.description}
        </Card.Text>
        <Button 
        style={{margin:"0.5rem"}} variant="primary" onClick={()=>{navigate(`/recipes/${props.recipe.id}`)}}>View Details</Button>
        
         <ToggleButton
        style={{margin:"0.5rem"}} 
        id="toggle-check"
        type="checkbox"
        variant="outline-primary"
        checked={favChecked}
        value="1"
        onChange={(e) => setFavChecked(e.currentTarget.checked)}
      >
        {favChecked ? " ❤️" : " 💔" }
      </ToggleButton>

      <button style= {{margin:"0.5rem"}} type="button" className="btn btn-danger" onClick={()=>{deleteRecipe(props.recipe.id)}}>
          ✘
        </button>

      </Card.Body>
    </Card>
</div>
  )

}
export default RecipeCard



