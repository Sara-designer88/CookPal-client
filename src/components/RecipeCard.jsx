import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import { useNavigate } from "react-router-dom";

function RecipeCard(props) {
  const navigate = useNavigate();
  return (
    <div >
          <Card style={{ width: '18rem' }}>
      <Card.Img variant="top" src="" />
      <Card.Body>
        <Card.Title>{props.recipe.title}</Card.Title>
        <Card.Text>
          {props.recipe.description}
        </Card.Text>
        <Button variant="primary" onClick={()=>{navigate(`/recipes/${props.recipe.id}`)}}>View Details</Button>
      </Card.Body>
    </Card>

    </div>
  )
}
export default RecipeCard



