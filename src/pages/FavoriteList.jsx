import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AddRecipe from "../components/AddRecipe";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import sample from "../images/CardSample.jpg"
import logo from "../images/CookPal-logo.png"
import header from "../images/CookPal-header.jpg"
import Spinner from 'react-bootstrap/Spinner';

import { Dropdown } from "bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import ListGroup from "react-bootstrap/ListGroup";

function FavoriteList() {


  const [recipes, setRecipes] = useState([]);
const [category, setCategory] = useState("");
  const navigate = useNavigate();

  //this to filter by favorite
  const favoriteRecipes = recipes.filter((recipe) => {
    return recipe.favChecked === true;
  });

   const displayedRecipes = favoriteRecipes.filter((recipe) => {
    return category ? recipe.category === category : true;
  });

  useEffect(() => {
    getData();
  }, []);

  // function to get all recipes from the database
  const getData = async () => {
    try {
      const response = await axios.get(
        `${import.meta.env.VITE_SERVER_URL}/recipes`,
      );
      setRecipes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // if there are no recipes, show loading message
  if (!recipes) return (
  <Button disabled>
  <Spinner
    as="span"
    animation="border"
    size="sm"
    role="status"
    aria-hidden="true"
  />
  {' '}Loading...
</Button>
  )

  return (
    <div>
      <h2 style={{ marginTop: "2rem", marginBottom: "2rem" }}>Favorite Recipe List</h2>

      
      <div className="d-flex gap-3 mb-4 flex-wrap">
        <Form.Select onChange={(e) => setCategory(e.target.value)}>
          <option value="">Filter by category </option>
          <option value="Breakfast">Breakfast</option>
          <option value="Brunch">Brunch</option>
          <option value="Lunch">Lunch</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
          <option value="Snack">Snack</option>
          <option value="Vegan">Vegan</option>
          <option value="Drinks">Drinks</option>
          <option value="Others">Others</option>
        </Form.Select>
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent:"space-around",
          alignContent:"center",
          gap: '1rem'
        }}
      >
        {displayedRecipes.length === 0 ? (
          <p>Sorry no recipes found</p>
        ) : (
          displayedRecipes.map((recipe) => (
            <RecipeCard key={recipe.id} recipe={recipe}  />
          ))
        )}
      </div>
    </div>
  );
}
export default FavoriteList
