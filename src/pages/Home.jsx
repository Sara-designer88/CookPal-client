import { Link } from "react-router-dom"
import { useEffect, useState } from "react"
import axios from "axios"
import AddRecipe from "../components/AddRecipe"
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import react from 'react';
import Carousel from 'react-bootstrap/Carousel';
import sample from "../images/CardSample.jpg"
import logo from "../images/CookPal-logo.png"
import header from "../images/CookPal-header.jpg"





function HomePage() {
  return (
    <div>

      <img src={header} alt="CookPal header" className="header-image" />
    
      <Container style={{margin: "2rem 2rem 4rem auto" , display:"flex",flexDirection:"column",justifyContent:"center", alignContent:"center"}}>
      <p>Welcome to CookPal, your ultimate cooking companion! Whether you're a seasoned chef or just starting out in the kitchen, CookPal is here to help you discover new recipes, organize your favorite dishes. Explore our extensive recipe collection, create personalized meal plans, and connect with a vibrant community of food enthusiasts. Let's get cooking with CookPal!</p>
    
     
     <Carousel data-bs-theme="dark" style={{width:"40rem", height:"40rem"}}>
      <Carousel.Item interval={1000}>
        <img src={sample} text="First slide" className="d-block w-100"/>
        <Carousel.Caption>
          <h3>Check lastest Reciepes</h3>
          <p>You can browse more recipe here.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item interval={500}>
        <img text="Second slide" src={sample} className="d-block w-100" />
        <Carousel.Caption>
          <h3>Remember your favorite recipes</h3>
          <p>You can save your favorite recipes here.</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img text="Third slide" src={sample} className="d-block w-100"/>
        <Carousel.Caption>
          <h3>Create your own recipes</h3>
          <p>
            You can create, edit and delete your own recipes here.
          </p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
       </Container>

    </div>
  )
}
export default HomePage

