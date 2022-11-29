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
    <Navbar sticky="top" bg="light" expand="lg">
      <Container>
        <NavLink    className="navbar-brand" to="/">MERN-Pizza</NavLink>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav variant="pills"  className="me-auto">
            {navList}
          </Nav>
        </Navbar.Collapse>


        <Nav variant="pills"  activeKey="1" >
      <NavDropdown title="Account"  id="nav-dropdown">
        <NavLink className="dropdown-item" to="/SignIn" >Sign In</NavLink>
        <NavDropdown.Divider />
        <NavLink className="dropdown-item" to="/SignUp" >Sign Up</NavLink>
      </NavDropdown>
    </Nav>


      </Container>
    </Navbar>
  );
}

export default Header