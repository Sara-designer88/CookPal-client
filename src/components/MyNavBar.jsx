import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavbarBrand from 'react-bootstrap/NavbarBrand'
import NavbarToggle from 'react-bootstrap/NavbarToggle'
import { Link } from 'react-router-dom';


function MyNavBar() {
  return (
    <Navbar expand="sm" className="bg-body-tertiary" >
      <Container>
        <Navbar.Brand as={Link} to="/">
         <img src="./src/images/CookPal-logo.png" alt="CookPal Logo" className='navbar-brand' width={140} height={80} />
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <Nav.Link as={Link} to="/favorites">
             My Favorite Recipes
            </Nav.Link>
             <Nav.Link as={Link} to="/add-recipe">
             Create New Recipes
            </Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
export default MyNavBar