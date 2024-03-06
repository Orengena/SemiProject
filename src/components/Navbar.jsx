import React from 'react'
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import { Link, useHistory } from 'react-router-dom/cjs/react-router-dom';
import { signOut} from "firebase/auth";
import { auth } from '../firebase-config';

export default function Navbar1() {
  const history = useHistory();

  let logoutUser = async () => {
    try {
        await signOut(auth);
        history.push('/login')
    } catch (err) {
        console.error(err);
    }
};

  return (
    <Navbar expand="lg" className="bg-body-tertiary fixed-top">
      <Container>
        <Navbar.Brand ><img src='Logo1.PNG' alt='RECIPEFORALL' style={{ height: "50PX" }} /></Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto" >
         
         <NavDropdown title="Links">
         <NavDropdown.Item >
                <li onClick={logoutUser}>
               logout
                </li>
              </NavDropdown.Item>

         <NavDropdown.Item >
                <li>
                  <Link to={'/aboutus'} >About us</Link>
                </li>
              </NavDropdown.Item>

              <NavDropdown.Item >
                <li>
                  <Link to={'/Home'} >Home</Link>
                </li>
              </NavDropdown.Item>
         </NavDropdown>

            <NavDropdown title=" Food Recipes" id="basic-nav-dropdown">
              <NavDropdown.Item >
                <li>
                  <Link to={'/users-recipe'} >Users Recipes</Link>
                </li>
              </NavDropdown.Item>

              <NavDropdown.Item >
              <li>
                  <Link to={'/search'} >search recipe</Link>
                </li>
              </NavDropdown.Item>

              <NavDropdown.Item>
              <li>
                  <Link to={'/random'} >random recipe</Link>
                </li>
                </NavDropdown.Item>
              <NavDropdown.Divider />
              <NavDropdown.Item >
              <li>
                  <Link to={'/upload'} >Upload your recipe</Link>
                </li>
              </NavDropdown.Item>
            </NavDropdown>
            <Navbar.Brand>
               <li >
                  <Link style={{color:"black"}} to={'/drinks'}>Drinks</Link>
                </li>
                </Navbar.Brand>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}
