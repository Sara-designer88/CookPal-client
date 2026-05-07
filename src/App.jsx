import MyNavBar from './components/MyNavBar'
import { Routes, Route } from 'react-router-dom'
import AddRecipe from './components/AddRecipe'
import HomePage from './pages/Home'
import FavoriteList from './pages/FavoriteList'
import EditRecipe from './pages/EditRecipe'
import RecipeList from './pages/RecipeList'
import ApiList from './pages/ApiList'
import ApiDescription from './pages/ApiDescription'
import RecipeDetails from './pages/RecipeDetails'
import NotFound from './pages/NotFound'
import './App.css'
import Image from 'react-bootstrap/Image';


function App() {
  

  return (
    <>

    <MyNavBar/>
  
   
    <Routes>
      <Route path="/" element={<HomePage/>}/>
      <Route path="/favorites" element={<FavoriteList/>}/>
      <Route path="/add-recipe" element={<AddRecipe/>}/>
      <Route path="/edit-recipe/:recipeId" element={<EditRecipe/>}/>
      <Route path="/all-recipes" element={<RecipeList/>}/>
      <Route path="/api-Recipes" element={<ApiList/>}/>
      <Route path="/recipes/:recipeId" element={<RecipeDetails/>}/>
      <Route path="/Api-recipes/:recipeId" element={<ApiDescription/>}/>
      <Route path="*" element={<NotFound/>}/>
      
    </Routes>
      
    </>
  )
}

export default App
