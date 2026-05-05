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
import Row  from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";

import { Dropdown } from "bootstrap";
import DropdownButton from "react-bootstrap/DropdownButton";
import ListGroup from "react-bootstrap/ListGroup";


function ApiList() {

  const [APIRecipes, setAPIRecipes] = useState([]);

  

  useEffect(() => {
    getData();
  }, []);

  // function to get all API recipes 
  const getData = async () => {
    try {
      const response = await axios.get("https://www.themealdb.com/api/json/v1/" );
      setAPIRecipes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  };

  // if there are no recipes, show loading message
  if (!APIRecipes) return <h3>Loading...</h3>;




  return (
    <div>
      <h2 style={{ marginTop: "4rem", marginBottom: "2rem" }}>Recipe List</h2>
  
      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Filter By</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/all-recipes">
              All Recipes
            </Nav.Link>
            <Nav.Link as={Link} to="/all-recipes">
              My Recipes
            </Nav.Link>
            <Nav.Link as={Link} to="/all-recipes">
              API Recipes
            </Nav.Link>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => {
                navigate("/add-recipe");
              }}
            >
              Create New Recipe{" "}
            </button>
          </Nav>
        </Container>
      </Navbar>
      <Form.Select className="mb-4">
        <option>Filter by category </option>
        <option value="Breakfast">Breakfast</option>
        <option value="Lunch">Lunch</option>
        <option value="Dinner">Dinner</option>
        <option value="Dessert">Dessert</option>
      </Form.Select>
    

        {APIRecipes.map((recipe) => {
            return <RecipeCardAPI key={recipe.idMeal} recipe={recipe} />;
        })}
    
    </div>
  );
}
export default ApiList
