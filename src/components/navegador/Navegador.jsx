import React from "react";
import { Navbar, Container, Nav, NavDropdown } from "react-bootstrap";
import "../navegador/nav.css"

const Navegador = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">GYM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
            <NavDropdown title="Entrenamiento" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Clases</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Rutinas</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.3">Membresias</NavDropdown.Item>
            </NavDropdown>
            <NavDropdown title="Tienda Online" id="basic-nav-dropdown">
              <NavDropdown.Item href="#action/3.1">Indumentaria</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Accesorios</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Equipos</NavDropdown.Item>
              <NavDropdown.Item href="#action/3.2">Ver todo</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="/acercade">Acerca de nosotros</Nav.Link>
        
          </Nav>
          <Nav.Link href="/registro">Crear cuenta&nbsp;&nbsp;|</Nav.Link>
          <Nav.Link href="/login">
            &nbsp;&nbsp;Iniciar sesión&nbsp;&nbsp;
          </Nav.Link>
          <Nav.Link href="#home">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="16"
              height="16"
              fill="currentColor"
              class="bi bi-cart2"
              viewBox="0 0 16 16"
            >
              <path d="M0 2.5A.5.5 0 0 1 .5 2H2a.5.5 0 0 1 .485.379L2.89 4H14.5a.5.5 0 0 1 .485.621l-1.5 6A.5.5 0 0 1 13 11H4a.5.5 0 0 1-.485-.379L1.61 3H.5a.5.5 0 0 1-.5-.5zM3.14 5l1.25 5h8.22l1.25-5H3.14zM5 13a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0zm9-1a1 1 0 1 0 0 2 1 1 0 0 0 0-2zm-2 1a2 2 0 1 1 4 0 2 2 0 0 1-4 0z" />
            </svg>
          </Nav.Link>
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  );
};

export default Navegador;