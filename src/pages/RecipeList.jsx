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

function RecipeList() {
  const [activeTab, setActiveTab] = useState("all");
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

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

  // BaseRecipe for choosing with list will appear based on filtering the pages
  const baseRecipes =
    activeTab === "my"
      ? recipes.filter((r) => r.source === "user")
      : activeTab === "api"
        ? recipes.filter((r) => r.source === "api")
        : recipes;

  //this to filter by recipe category from the selected base recipe
  const displayedRecipes = baseRecipes.filter((recipe) => {
    return category ? recipe.category === category : true;
  });
  
  return (
    <div>
      <h2 style={{ marginTop: "2rem", marginBottom: "2rem" }}>Recipe List</h2>

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand></Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link
              onClick={() => setActiveTab("all")}
              active={activeTab === "all"}
            >
              All Recipes
            </Nav.Link>

            <Nav.Link
              onClick={() => setActiveTab("my")}
              active={activeTab === "my"}
            >
              My Recipes
            </Nav.Link>

            <Nav.Link
              onClick={() => setActiveTab("api")}
              active={activeTab === "api"}
            >
              Saved Recipes
            </Nav.Link>
          </Nav>
        </Container>
        <button
          type="button"
          className="btn btn-primary  text-wrap text-md-nowrap"
          onClick={() => {
            navigate("/add-recipe");
          }}
        >
          Create Recipe
        </button>
      </Navbar>

      <div className="d-flex gap-3 mb-4 flex-wrap">
        <Form.Select onChange={(e) => setCategory(e.target.value)}>
          <option value="">Filter by category </option>
          <option value="Breakfast">Breakfast</option>
          <option value="Brunch">Brunch</option>
          <option value="Lunch">Lunch</option>
          <option value="Chicken">Chicken</option>
          <option value="Beef">Beef</option>
          <option value="Seafood">Seafood</option>
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
          <option value="Snack">Snack</option>
           <option value="Vegetarian">Vegetarian</option>
          <option value="Drinks">Drinks</option>
            <option value="Side">Side</option>
          <option value="Others">Others</option>
      
        </Form.Select>

      
      </div>

      <div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent:"space-around",
          alignContent:"center",
          gap: '1rem',
          margin: '2rem'
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
export default RecipeList;
