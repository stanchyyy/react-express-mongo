import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";


const navs = [
  {displayName:"Home",link:"#home",key:"home"},
  {displayName:"Products",link:"#products",key:"products"},
  {displayName:"Menu",link:"#menu",key:"menu"},
  {displayName:"Location",link:"#location",key:"location"},
  {displayName:"Favourites",link:"#favourites",key:"favourites"}];

const navList = navs.map((nav)=>
  <Nav.Link href={nav.link} key={nav.key}>{nav.displayName}</Nav.Link>
)

function Header() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <NavLink className="navbar-brand" to="/">MERN-Pizza</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navList}
          </Nav>
        </Navbar.Collapse>
        <NavDropdown title="Account" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Sign In</NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item href="#action/3.2">Sign Up</NavDropdown.Item>
            </NavDropdown>
      </Container>
    </Navbar>
  );
}

export default Header