import React from 'react'

const NavegadorAdmin = () => {
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
          
        
        </Navbar.Collapse>
      </Container>
    </Navbar>
  )
}

export default NavegadorAdmin