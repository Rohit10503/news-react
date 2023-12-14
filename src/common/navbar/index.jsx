import React from "react";
import Container from 'react-bootstrap/Container';
import Nav from 'react-bootstrap/Nav';
import Navbar from 'react-bootstrap/Navbar';


const NavbarMain = () => {





  return (
    <Navbar bg="dark" className="navbar-dark fixed-top " expand="lg">
      <Container className="d-flex">   
        <Navbar.Brand href="/">NEWS DAILY</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto " color="white" >
           <Nav >Home   </Nav>
           <Nav  >Business</Nav>
          <Nav >Entertainment</Nav>
          <Nav >Health</Nav>
          <Nav  >Science</Nav>
          <Nav  >sports</Nav>
          <Nav >Technology</Nav>
          </Nav> 
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
}

export default NavbarMain;