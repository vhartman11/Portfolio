import React       from 'react';
import * as Icon   from 'react-bootstrap-icons';
import Container   from 'react-bootstrap/Container';
import Nav         from 'react-bootstrap/Nav';
import Navbar      from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown';

export function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="My Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/vhartman11/" target="_blank"><Icon.Linkedin color="blue" size="1rem"/> LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/vhartman11" target="_blank"><Icon.Github color="black" size="1rem"/> GitHub</NavDropdown.Item>
              <NavDropdown.Item href="https://profile.indeed.com/?hl=en&co=US&from=gnav-homepage&_ga=2.18522425.1007235782.1668047438-1241968890.1639360763" target="_blank"><Icon.Info color="blue" size="1.5rem"/>indeed</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#/projects/">Projects</Nav.Link>
            <Nav.Link href="#/about/">About Me</Nav.Link>
            <Nav.Link href="#/contact">Contact Me</Nav.Link>
            {/* <Nav.Link href="#/map">Map</Nav.Link> in development */}
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};