import axios from "axios";
import { useNavigate } from "react-router-dom";
import { use, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import Card from "react-bootstrap/Card";
import ListGroup from "react-bootstrap/ListGroup";
import { ToggleButton } from "react-bootstrap";
import { Link } from "react-router-dom";
import sample from "../images/CardSample.jpg"
import logo from "../images/CookPal-logo.png"
import header from "../images/CookPal-header.jpg"

function ApiDescription() {
  const { recipeId } = useParams();
  const [recipe, setRecipe] = useState(null);
  const navigate = useNavigate();

      const [image, setImage] = useState("");
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
//  const [ingredientItems, setIngredientItems] = useState([]);
  const [steps, setSteps] = useState("");
  const [category, setCategory] = useState("");
  const [source, setSource] = useState("api");
  const [favChecked, setFavChecked] = useState(false);
  const [preperationTime, setPreperationTime] = useState("");
  const [cookingTime, setCookingTime] = useState("");
  const [ ingredientsItems, setIngredientsItems] = useState([]);



  const handleSaveRecipe = async (e) => {
    e.preventDefault();

    const body = {
      image: image,
      title: title,
      description: description,
      steps: steps,
      category: category,
      source: "api",
      favChecked: favChecked,
      cookingTime: cookingTime,
      preperationTime: preperationTime,
      ingredients: ingredients
    };

    try {
      const response = await axios.post(
        `${import.meta.env.VITE_SERVER_URL}/recipes`,
        body,
      );
      navigate("/all-recipes");
    } catch (error) {
      console.log(error);
    }
  
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
      
      setImage(response.data.meals[0].strMealThumb)
      setTitle(response.data.meals[0].strMeal);
      setDescription(response.data.meals[0].strArea);
      setSteps(response.data.meals[0].strInstructions);
      setCategory(response.data.meals[0].strCategory);
      setIngredients(response.data.meals[0].strIngredient1);
  
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
              navigate("/api-Recipes");
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
