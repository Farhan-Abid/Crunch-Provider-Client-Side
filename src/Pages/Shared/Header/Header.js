import { signOut } from 'firebase/auth';
import React from 'react';
import { Container, Nav, Navbar, NavDropdown } from 'react-bootstrap';
import { useAuthState } from 'react-firebase-hooks/auth';
import { Link } from 'react-router-dom';
import auth from '../../../firebase.init';

const Header = () => {
  const [user] = useAuthState(auth);
    return (
        <>
  <Navbar collapseOnSelect sticky='top' expand="lg" bg="dark" variant="dark">
  <Container>
  <Navbar.Brand as={Link} to="/">Crunch Provider</Navbar.Brand>
  <Navbar.Toggle aria-controls="responsive-navbar-nav" />
  <Navbar.Collapse id="responsive-navbar-nav">
    <Nav className="me-auto">
      <Nav.Link href="#pricing">Pricing</Nav.Link>
      <NavDropdown title="Dropdown" id="collasible-nav-dropdown">
        <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
        <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
        <NavDropdown.Divider />
        <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
      </NavDropdown>
    </Nav>
    <Nav>
      <Nav.Link as={Link} to="/blog">Blog</Nav.Link>
      {user ? (
                <Nav.Link as={Link} to="/manageinventories">
                  Manage Inventory
                </Nav.Link>
              ) : (
                ""
              )}
              {user ? (
                <Nav.Link as={Link} to="/additem">
                  Add Item
                </Nav.Link>
              ) : (
                ""
              )}
              {user ? (
                <Nav.Link as={Link} to="/myitems">
                  My Items
                </Nav.Link>
              ) : (
                ""
              )}
      {user ? (
                <button
                  className="btn btn-link text-white text-decoration-none"
                  onClick={() => signOut(auth)}
                >
                  Sign out
                </button>
              ) : (
                <Nav.Link as={Link} to="/login">
                  Log In
                </Nav.Link>
              )}
    </Nav>
  </Navbar.Collapse>
  </Container>
</Navbar>
  
</>
    );
};

export default Header;