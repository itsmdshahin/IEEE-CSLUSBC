import React from 'react'; 
import 'bootstrap/dist/css/bootstrap.min.css';
import { Carousel, Navbar, Nav, Container, NavDropdown,Row,Col } from 'react-bootstrap';
import IMG1 from '../../src/image/event1.jpg';
import IMG2 from '../../src/image/event3.jpg';
import IMG3 from '../../src/image/event4.jpg';
 
function headers() {
    return (
        <div className='mynav'>
      <Navbar collapseOnSelect expand="lg" bg="dark" variant="dark">
          <Container>
          <Navbar.Brand href="#home" className="icon12"><b>IEEE CS LU SBC</b></Navbar.Brand>
          <Navbar.Toggle aria-controls="responsive-navbar-nav" />
          <Navbar.Collapse id="responsive-navbar-nav">
            <Nav className="me-auto">
              
              <NavDropdown title="Publication" id="collasible-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Our Events</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Gallery</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Research Paper</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Publication</NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="#ourteam">Our Team</Nav.Link>
              <Nav.Link href="#Achievements">Activites</Nav.Link>
              <Nav.Link href="#About">About</Nav.Link>
              <Nav.Link href="#Achievements">Achievements</Nav.Link>
              <Nav.Link href="#Achievements"></Nav.Link>
            </Nav>
            <Nav>
              <Nav.Link href="#deets">Join Us/ Sign in</Nav.Link>
            </Nav>
          </Navbar.Collapse>
          </Container>
          </Navbar>
          </div>

);
}

export default headers;