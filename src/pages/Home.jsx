import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import AddRecipe from "../components/AddRecipe"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';




function HomePage() {
  return (
    <div>
     
      <Container style={{margin: "4rem 2rem 4rem auto"}}>
      <p>Welcome to CookPal, your ultimate cooking companion! Whether you're a seasoned chef or just starting out in the kitchen, CookPal is here to help you discover new recipes, organize your favorite dishes, and share your culinary creations with friends and family. Explore our extensive recipe collection, create personalized meal plans, and connect with a vibrant community of food enthusiasts. Let's get cooking with CookPal!</p>
     </Container>
     
      {/* add carrousal with 3 images of food and a caption for each image describing the dish. */}
      

    </div>
  )
}
export default HomePage

