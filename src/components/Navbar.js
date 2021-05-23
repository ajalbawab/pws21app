import React from 'react';
import { Navbar, Nav, Form, FormControl, Button } from 'react-bootstrap';
import { useHistory } from 'react-router-dom';

import 'bootstrap/dist/css/bootstrap.min.css';

const NavBar = () => {
  let history = useHistory();

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
      <div style={styles.link} onClick={() => {
        history.push('/about');
      }}>About</div>
      <div style={styles.link} onClick={() => {
        history.push('/team');
      }} >Team</div>
      <div style={styles.link} onClick={() => {
        history.push('/contact');
      }} >Contact</div>
    </Nav>
    <Form inline>
      <FormControl type="text" placeholder="Search" className="mr-sm-2" />
      <Button variant="outline-info">Search</Button>
    </Form>
  </Navbar>
  );
};

const styles = {
  link: {
    display: 'flex',
    padding: '.5rem 2rem',
    color: 'white',
    cursor: 'pointer',
  }
}

export default NavBar;