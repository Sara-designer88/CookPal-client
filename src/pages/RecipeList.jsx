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

import { Dropdown } from "bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import ListGroup from "react-bootstrap/ListGroup";

function RecipeList() {
  const [activeTab, setActiveTab] = useState("all");
  const [recipes, setRecipes] = useState([]);
  const [category, setCategory] = useState("");
  const navigate = useNavigate();

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
  if (!recipes) return <h3>Loading...</h3>;

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
              API Recipes
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
          <option value="Dinner">Dinner</option>
          <option value="Dessert">Dessert</option>
          <option value="Snack">Snack</option>
          <option value="Vegan">Vegan</option>
          <option value="Drinks">Drinks</option>
          <option value="Others">Others</option>
        </Form.Select>

        {/* <Form.Select >
    <option value="">Filter by callories</option>
    <option value="Easy">less than 500</option>
    <option value="Hard">less than 1000</option>
      </Form.Select> */}
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
export default RecipeList;
