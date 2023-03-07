import { Navbar, Container, Nav } from "react-bootstrap";
import { Link } from "react-router-dom";

export const NavBar = ({ user, onLoggedOut }) => {


  return (
    <Navbar className='navbar' variant='dark' bg="primary" expand="lg" sticky='top'>
      <Container>
        <Navbar.Brand as={Link} to="/">
          Sophia Films
        </Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            {!user && (
              <>
                <Nav.Link as={Link} to="/login">
                  Login
                </Nav.Link>
                <Nav.Link as={Link} to="/signup">
                  Signup
                </Nav.Link>
              </>
            )}
            {user && (
              <>
                <Nav.Link as={Link} to={`/user/id/${user._id}`} >Profile</Nav.Link>
                <Nav.Link onClick={onLoggedOut} >Logout</Nav.Link>
              </>
            )}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};
