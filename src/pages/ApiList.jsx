import { Link } from "react-router-dom";
import { useEffect, useState } from "react";
import axios from "axios";
import AddRecipe from "../components/AddRecipe";
import Container from "react-bootstrap/Container";
import Nav from "react-bootstrap/Nav";
import Navbar from "react-bootstrap/Navbar";
import { useNavigate } from "react-router-dom";
import RecipeCardAPI from "../components/RecipeCardAPI";
import Form from "react-bootstrap/Form";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Spinner from 'react-bootstrap/Spinner';
import Button from "react-bootstrap/Button";
import sample from "../images/CardSample.jpg"
import logo from "../images/CookPal-logo.png"
import header from "../images/CookPal-header.jpg"





function ApiList() {

  const [recipes, setRecipes] = useState(null);
  const [ category, setCategory]=useState("");


  // this to search by name from the API 
  const [searchQuery, setSearchQuery] = useState("")
  const [filteredRecipes, setFilteredRecipes] = useState(recipes);
   
// function to get all API with the search name
  const handleSearch = async (e) => {
    let search = e.target.value

    try {
      const response = await axios.get(`https://www.themealdb.com/api/json/v1/1/search.php?s=${search}`);
      setRecipes(response.data.meals);
      setSearchQuery(search)
      console.error(error);
    }
  };
  

  useEffect(() => {
    getData()
  
  }, []);

  // function to get all API recipes 
  const getData = async () => {
    try {
      const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=");
      setRecipes(response.data.meals);
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

   //this to filter by recipe category from the selected base recipe
 const displayedRecipes = recipes.filter((recipe) => {
    return category ? recipe.strCategory === category : true;
  });


  return (
    <div>
      <h2 style={{ marginTop: "4rem", marginBottom: "2rem" }}> Recipes List </h2>
  
    <Form inline>
        <Row>
          <Col xs="auto">
            <Form.Control
              type="text"
              placeholder="Search by recipe title"
              className=" mr-sm-2"
                value={searchQuery}
                onChange={handleSearch}
            />
          </Col>
        </Row>
      </Form>

      <Form.Select className="mb-4" onChange={(e) => setCategory(e.target.value)}>
        <option value="" >Filter by category </option>
        <option value="Breakfast">Breakfast</option>
        <option value="Chicken">Chicken</option>
        <option value="Beef">Beef</option>
        <option value="Dessert">Dessert</option>
         <option value="Vegetarian">Vegetarian</option>
         <option value="Seafood">Seafood</option>
         <option value="Side">Side</option>
      </Form.Select>
    

<div
        style={{
          display: "flex",
          flexWrap: "wrap",
          justifyContent:"space-around",
          alignContent:"center",
          gap: '1rem',
        }}
      >
        {displayedRecipes.length === 0 ? (
          <p>Sorry no recipes found</p>
        ) : (
        displayedRecipes.map((recipe) => {
            return <RecipeCardAPI key={recipe.idMeal} recipe={recipe} />;
}))
    }
        </div>
    </div>
  );
}
export default ApiList
