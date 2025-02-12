import React,{useState} from 'react'
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';
import Container from 'react-bootstrap/Container'
import Image from 'react-bootstrap/Image'

function App() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Navbar className="bgColor">
      <Container className="d-flex justify-content-between">
        <Navbar.Brand href="#home">
          <Image src="./assets/playcss.png" className="playcss" alt="Play CSS" />
        </Navbar.Brand>
        <div className={`hamburger ${isMenuOpen ? 'active' : ''}`} onClick={toggleMenu}>
          <div className="hamburgerIcon"></div>
        </div>
        <Nav className={`${isMenuOpen ? 'navbar-nav-active' : ''}`}>
          <Nav.Link href="#home">Features</Nav.Link>
          <Nav.Link href="#link">Pro</Nav.Link>
          <Nav.Link href="#link">Daily Submission</Nav.Link>
          <NavDropdown title="Challenges" id="basic-nav-dropdown">
            <NavDropdown.Item href="#action/3.1">Image Challenges</NavDropdown.Item>
            <NavDropdown.Item href="#action/3.3">UI Challenges</NavDropdown.Item>
          </NavDropdown>
          <Nav.Link href="#link">Sign Up</Nav.Link>
          <Nav.Link href="#link">Sign In</Nav.Link>
        </Nav>
      </Container>
    </Navbar>
  );
}

export default App;
