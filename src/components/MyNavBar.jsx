import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import { Link } from 'react-router-dom';
import "../images/CardSample.jpg"
import "../images/CookPal-logo.png"
import "../images/CookPal-header.jpg"


function MyNavBar() {
  return (
    <Navbar expand="sm" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand as={Link} to="/">
         <img src="./src/images/CookPal-logo.png" alt="CookPal Logo" className='navbar-brand' width={160} height={100} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/all-recipes">
             All Recipes
            </Nav.Link>
            <Nav.Link as={Link} to="/api-Recipes">
             Discover Recipes 
            </Nav.Link>
            <Nav.Link as={Link} to="/favorites">
             Favorites
            </Nav.Link>
           
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default MyNavBar