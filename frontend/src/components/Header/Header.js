import React from "react";
import {
  Container,
  Form,
  FormControl,
  Nav,
  Navbar,
  NavDropdown
} from "react-bootstrap";

function Header() {
  return (
    <Navbar bg="primary" expand="lg" variant='dark'>
      <Container>
    <Navbar.Brand href="#">Note Zipper </Navbar.Brand>
    <Navbar.Toggle aria-controls="navbarScroll" />
    <Navbar.Collapse id="navbarScroll">
      <Nav className="m-auto">
        <Form className="d-flex">
        <FormControl
          type="search"
          placeholder="Search"
          className="me-2"
          aria-label="Search"
        />
      </Form>
      </Nav>
      <Nav>
        <Nav.Link href="#home">My Notes</Nav.Link>
        <NavDropdown title="User" id="basic-nav-dropdown">
          <NavDropdown.Item href="#action/3.1">My Profile</NavDropdown.Item>
          <NavDropdown.Divider />
          <NavDropdown.Item href="#action/3.4">
            LogOut
          </NavDropdown.Item>
        </NavDropdown>
      </Nav>
      
    </Navbar.Collapse>
  </Container>
</Navbar>
  );
}

export default Header;
