import React       from 'react';
import Container   from 'react-bootstrap/Container';
import Nav         from 'react-bootstrap/Nav';
import Navbar      from 'react-bootstrap/Navbar';
import NavDropdown from 'react-bootstrap/NavDropdown'
//import {Link}        from 'react-router-dom';
//import NavDropdown from 'react-bootstrap/NavDropdown';

export function Navigation() {
  return (
    <Navbar bg="light" expand="lg">
      <Container>
        <Navbar.Brand href="#">My Portfolio</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="My Pages" id="basic-nav-dropdown">
              <NavDropdown.Item href="https://www.linkedin.com/in/vhartman11/" target="_blank">LinkedIn</NavDropdown.Item>
              <NavDropdown.Item href="https://profile.indeed.com/?hl=en&co=US&from=gnav-homepage&_ga=2.18522425.1007235782.1668047438-1241968890.1639360763" target="_blank">indeed</NavDropdown.Item>
              <NavDropdown.Item href="https://github.com/vhartman11" target="_blank">GitHub</NavDropdown.Item>
            </NavDropdown>
            <Nav.Link href="#/projects/">Projects</Nav.Link>
            <Nav.Link href="#/about/">About Me</Nav.Link>
            <Nav.Link href="#/contact/">Contact Me</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}
