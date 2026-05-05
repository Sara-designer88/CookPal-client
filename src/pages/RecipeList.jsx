import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import AddRecipe from "../components/AddRecipe"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import { useNavigate } from "react-router-dom";
import RecipeCard from "../components/RecipeCard";


function RecipeList() {

   const [recipes, setRecipes] = useState([]);
  const navigate = useNavigate();
  
  useEffect(() => {
    getData();
  }, []);
  
  // function to get all recipes from the database
  const getData = async () => {
    try {
      const response = await axios.get(`${import.meta.env.VITE_SERVER_URL}/recipes`);
      setRecipes(response.data);
      console.log(response.data);
    } catch (error) {
      console.error(error);
    }
  }

  // if there are no recipes, show loading message
  if(!recipes) return <h3>Loading...</h3> 


  return (
    <div> 
     <h2>Recipe List</h2>

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand href="#home">Filter By</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link href="#home">All Recipes</Nav.Link>
            <Nav.Link href="#features">My Recipes</Nav.Link>
            <Nav.Link href="#pricing">API Recipes</Nav.Link>
            <Nav.Link href="#pricing">Favorite Recipes</Nav.Link>
            <button type="button"  className="btn btn-primary" onClick={()=>{navigate("/add-recipe")}}>Create New Recipe </button>
          </Nav>
        </Container>
      </Navbar>


     {recipes.map((recipe) => {
        return <RecipeCard key={recipe.id} recipe={recipe} />
      })}

    
    </div>
  )
}
export default RecipeList