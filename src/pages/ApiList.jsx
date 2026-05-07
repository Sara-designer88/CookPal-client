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
import "../images/CardSample.jpg"
import "../images/CookPal-logo.png"
import "../images/CookPal-header.jpg"





function ApiList() {

  const [recipes, setRecipes] = useState(null);
  const [ category, setCategory]=useState("");

    //this to filter by recipe category from the selected base recipe

  useEffect(() => {
    getData()
  
  }, []);

  // function to get all API recipes 
  const getData = async () => {
    try {
      const response = await axios.get("https://www.themealdb.com/api/json/v1/1/search.php?s=");
      setRecipes(response.data.meals);
      console.log(response.data.meals);
    } catch (error) {
      console.error(error);
    }
  };

  // if there are no recipes, show loading message
  if (!recipes) return <h3>Loading...</h3>;

 const displayedRecipes = recipes.filter((recipe) => {
    return category ? recipe.strCategory === category : true;
  });


  return (
    <div>
      <h2 style={{ marginTop: "4rem", marginBottom: "2rem" }}> Recipes List </h2>
  
    
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
          margin: '2rem'
        }}
      >
        {displayedRecipes.map((recipe) => {
            return <RecipeCardAPI key={recipe.idMeal} recipe={recipe} />;
        })}
        </div>
    </div>
  );
}
export default ApiList
