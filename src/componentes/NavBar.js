import React from 'react';
import { Container, Navbar } from 'react-bootstrap';

const NavBar = () => {
    return(
        <div className="App">
    <Navbar bg="danger" expand="lg">
  <Container>
    <Navbar.Brand className="text-white" href="#home">React Test App</Navbar.Brand>
    
    
  </Container>
</Navbar>
        </div>
    )
}

export default NavBar;


