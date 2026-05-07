import axios from "axios";
import { useNavigate } from "react-router-dom";
import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ToggleButton } from "react-bootstrap";
import "../images/CardSample.png";
import { Link } from "react-router-dom";

function ApiDescription() {
  const { recipeId } = useParams();
  console.log(recipeId);
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();



  const handleSaveRecipe =()=>{

    navigate("/all-recipes")
  }



  useEffect(() => {
    getData();
  }, []);

  // function to get recipe details from the database
  const getData = async () => {
    try {
      const response = await axios.get(
        `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${recipeId}`,
      );
      setRecipe(response.data.meals[0]);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  if (!recipe) return <h3>Loading...</h3>;

  const meal = recipe;
  const ingredients = [];
  for (let i = 1; i <= 20; i++) {
    const ingredient = meal[`strIngredient${i}`];
    const measure = meal[`strMeasure${i}`];

    if (ingredient && ingredient.trim() !== "") {
      ingredients.push({
        ingredient,
        measure,
      });
    }
  }
  console.log(ingredients);

  return (
    <div>
      <Card
        style={{
          width: "30rem",
          margin: "2rem auto",
          padding: "2rem",
          boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)",
        }}
      >
        <Card.Img variant="top" src={recipe.strMealThumb} />

        <Card.Body>
          <Card.Title>{recipe.strMeal}</Card.Title>

          <Card.Text> Recipe from: {recipe.strArea}</Card.Text>
        </Card.Body>

        <ListGroup className="list-group-flush">
          <ListGroup.Item style={{ display: "flex", justifyContent: "left" }}>
            <b>Ingredients:</b>
            <ul
              style={{
                display: "flex",
                justifyContent: "left",
                flexDirection: "column",
                alignContent: "center",
              }}
            >
              {ingredients.map((item, index) => (
                <li key={index}>
                  {item.ingredient} - {item.measure}
                </li>
              ))}
            </ul>
          </ListGroup.Item>
        </ListGroup>

        <ListGroup.Item style={{ display: "flex", justifyContent: "left" }}>
          <b>Steps:</b> {recipe.strInstructions}
        </ListGroup.Item>
        <ListGroup.Item style={{ display: "flex", justifyContent: "left" }}>
          <b>Category: </b>
          {recipe.strCategory}
        </ListGroup.Item>
        <ListGroup.Item style={{ display: "flex", justifyContent: "left" }}>
          <b>source:</b>
          <Link>{recipe.strSource}</Link>{" "}
        </ListGroup.Item>
        <ListGroup.Item style={{ display: "flex", justifyContent: "left" }}>
          <b>Youtube:</b> <Link>{recipe.strYoutube}</Link>{" "}
        </ListGroup.Item>

        <Card.Body>
          <button
            style={{ margin: "0.5rem" }}
            type="button"
            className="btn btn-secondary"
            onClick={() => {
              navigate("/all-recipes");
            }}
          >
            Back
          </button>
           <button style={{ margin: "0.5rem" }} type="button" className="btn btn-primary" onClick={handleSaveRecipe}>
          save to my list
        </button>
       
        </Card.Body>
      </Card>
    </div>
  );
}
export default ApiDescription;
