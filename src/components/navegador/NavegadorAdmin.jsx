import React from 'react'
import "../navegador/nav.css"
import { Navbar, Container, Nav, NavDropdown, Modal,
  Button,
  NavItem, } from "react-bootstrap"; 

const NavegadorAdmin = () => {
  return (
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">GYM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">
       
            <Nav.Link href="/admin">Administrador</Nav.Link>
            <Nav.Link href="/planes">Planes</Nav.Link>
            <Nav.Link href="/clientes">Usuarios</Nav.Link>
            <Nav.Link href="/chat">Chat</Nav.Link>
            <Nav.Link href="/admin/productos">Productos</Nav.Link>

          </Nav>
          
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavegadorAdmin