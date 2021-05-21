import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import NavDropdown from 'react-bootstrap/NavDropdown'
import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  return (
    <Navbar bg="dark" variant="dark">
    <Navbar.Brand href="/">
    <img
    src="\PWS_21.png"
    width="30"
    height="30"
    className="d-inline-block align-top"
    alt="PWS21"
  />
    </Navbar.Brand>
    <Nav className="mr-auto">
      <Nav.Link href="/about">About</Nav.Link>
      <Nav.Link href="/team">Team</Nav.Link>
      <Nav.Link href="/contact">Contact</Nav.Link>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  );
};

export default NavBar;