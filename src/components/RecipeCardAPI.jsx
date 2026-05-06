// import Button from 'react-bootstrap/Button';
// import Card from 'react-bootstrap/Card';
// import { useNavigate } from "react-router-dom";
// import { Container, Row, Col } from 'react-bootstrap';

// function RecipeCardAPI(props) {
//   const navigate = useNavigate();

//   return (
//  <div style={{display:'flex',flexWrap:'wrap'}}>
//           <Card style={{ width: '18rem' ,margin: '1rem' , boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)' , height: '100%' }}> 
//       <Card.Img variant="top" src={props.recipe.strMealThumb} />
//       <Card.Body>
//         <Card.Title>{props.recipe.strMeal}</Card.Title>
//         <Card.Text>
//           {props.recipe.strMealAlternate}
//         </Card.Text>
//         <Button variant="primary" onClick={()=>{navigate(`/recipes/${props.recipe.idMeal}`)}}>View Details</Button>
//       </Card.Body>
//     </Card>
// </div>
//   )

// }

// export default RecipeCardAPI