import './App.css'
import { Routes, Route } from 'react-router-dom'

import MyNavBar from './components/MyNavBar'
import AddRecipe from './components/AddRecipe'

import HomePage from './pages/Home'
import FavoriteList from './pages/FavoriteList'
import EditRecipe from './pages/EditRecipe'
import RecipeList from './pages/RecipeList'
import RecipeDetails from './pages/RecipeDetails'
import NotFound from './pages/NotFound'

import Image from 'react-bootstrap/Image';
import "./images/CookPal-logo.png"
import "./images/CookPal-header.jpg"

function App() {
  

  return (
    <>

    <MyNavBar/>
  
    <img src="./src/images/CookPal-header.jpg" alt="CookPal Logo" className="header-image" />
    
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/favorites" element={<FavoriteList/>}/>
      <Route path="/add-recipe" element={<AddRecipe/>}/>
      <Route path="/edit-recipe/:recipeId" element={<EditRecipe/>}/>
      <Route path="/my-recipes" element={<RecipeList/>}/>
      <Route path="/recipes/:recipeId" element={<RecipeDetails/>}/>
      <Route path="*" element={<NotFound/>}/>
      
    </Routes>
      
    </>
  )
}

export default App
