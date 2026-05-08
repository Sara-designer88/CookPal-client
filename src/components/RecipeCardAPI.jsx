import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";
import { Container, Row, Col } from 'react-bootstrap';
import sample from "../images/CardSample.jpg"


function RecipeCardAPI(props) {
  const navigate = useNavigate();
  console.log(props)
  

  return (  
 <div>
          <Card style={{ width: '18rem' ,margin: '1rem' , boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' , height: '100%' }}> 
      <Card.Img variant="top" src={props.recipe.strMealThumb} />
      <Card.Body>
        <Card.Title>{props.recipe.strMeal}</Card.Title>
        <Card.Text>
          Recipe from: {props.recipe.strArea}
        </Card.Text>
        <Button variant="primary" onClick={()=>{navigate(`/Api-recipes/${props.recipe.idMeal}`)}}>View Details</Button>
      </Card.Body>
    </Card>
</div>
  )

}

export default RecipeCardAPI