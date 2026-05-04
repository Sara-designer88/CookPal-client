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
      


      <h3>Recipe List</h3>

      <Navbar bg="light" data-bs-theme="light">
        <Container>
          <Navbar.Brand >Filter By</Navbar.Brand>
          <Nav className="me-auto">
            <Nav.Link >All</Nav.Link>
            <Nav.Link >My Recipes</Nav.Link>
            <Nav.Link >API Recipes</Nav.Link>
            <Nav.Link >My favorite Recipes</Nav.Link>
          </Nav>
        
        </Container>
           <button type="button" className="btn btn-primary" >
         <Link to="/add-recipe">Add New Recipe</Link>
      </button>
      </Navbar>



    </div>
  )
}
export default HomePage