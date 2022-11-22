import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { NavLink } from "react-router-dom";


const navs = [

  {displayName:"Products",link:"/Products",key:"products"},
  {displayName:"Menu",link:"/Menu",key:"menu"},
  {displayName:"Location",link:"/Locations",key:"location"},
  {displayName:"Favourites",link:"/Favourites",key:"favourites"}];

const navList = navs.map((nav)=>
  <NavLink className="nav-link" key={nav.key} to={nav.link}>{nav.displayName}</NavLink>
)



function Header() {
  return (
    <Navbar  sticky="top" bg="light" expand="lg">
      <Container>
        <NavLink  className="navbar-brand" to="/">MERN-Pizza</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {navList}
          </Nav>
        </Navbar.Collapse>


        <NavDropdown  className="text-center" title="Account" id="basic-nav-dropdown">
              <NavLink  className="nav-link text-center" to="/SignIn">Sign In</NavLink>
              <NavDropdown.Divider />
              <NavLink className="nav-link text-center" to="/SignUp">Sign Up</NavLink>
            </NavDropdown>
      </Container>
    </Navbar>
  );
}

export default Header