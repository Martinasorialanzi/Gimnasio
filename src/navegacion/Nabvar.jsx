import React, { useState } from "react";
import {
  Navbar,
  Container,
  Nav,
  NavDropdown,
  Modal,
  Button,
} from "react-bootstrap";
import Login from "../components/ingreso/Login";
import Registro from "../components/ingreso/Register";
import Swal from "sweetalert2";

const Navegador = () => {
  const [showL, setShowL] = useState(false);
  const [showR, setShowR] = useState(false);

  const handleShowR = async() => {
    const { value: password } = await Swal.fire({
      title: 'Ingrese el codigo',
      input: 'password',
      inputLabel: 'El registro es unicamente para el personal, si usted es cliente solicite a su entrenador que realice su registro',
      inputPlaceholder: 'Codigo',
      inputAttributes: {
        maxlength: 10,
        autocapitalize: 'off',
        autocorrect: 'off'
      }
    })
    
    if (password == 123 ) {
      Swal.fire(`Codigo correcto`)
      setShowR(true);
    setShowL(false);
    }
    
  };

  const handleShowL = () => {
    setShowL(true);
    setShowR(false);
  };

  return (
    <>
      <Navbar bg="light" expand="lg" className="navbar">
        <Container>
          <Navbar.Brand href="/home">GYM</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="me-auto">
              <NavDropdown title="Entrenamiento" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Clases</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Rutinas</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">
                  Membresias
                </NavDropdown.Item>
              </NavDropdown>
              <NavDropdown title="Tienda Online" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">
                  Indumentaria
                </NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">
                  Suplementos
                </NavDropdown.Item>
              </NavDropdown>
              <Nav.Link href="/about">Acerca de nosotros</Nav.Link>
              <Nav.Link href="#home">Contacto</Nav.Link>
            </Nav>
            <Nav.Link onClick={handleShowR}>
              Crear cuenta&nbsp;&nbsp;|
            </Nav.Link>
            <Nav.Link onClick={() => setShowL(true)}>
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
            <a class="link-secondary" href="#" aria-label="Search">
              <svg
                xmlns="http://www.w3.org/2000/svg"
                width="20"
                height="20"
                fill="none"
                stroke="currentColor"
                stroke-linecap="round"
                stroke-linejoin="round"
                stroke-width="2"
                class="mx-3"
                role="img"
                viewBox="0 0 24 24"
              >
                <title>Search</title>
                <circle cx="10.5" cy="10.5" r="7.5" />
                <path d="M21 21l-5.2-5.2" />
              </svg>
            </a>
          </Navbar.Collapse>
        </Container>
      </Navbar>

      {/* MODAL LOGIN */}
      <Modal show={showL} onHide={() => setShowL(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Login</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Login show={showL} />
        </Modal.Body>

        <Modal.Footer>
          <p>
            ¿Aún no estas registrado?{" "}
            <a
              style={{ cursor: "pointer" }}
              onClick={handleShowR}
              className="link"
            >
              click aqui
            </a>
          </p>
          <Button onClick={() => setShowL(false)} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>

      {/* modal regiistro */}
      <Modal show={showR} onHide={() => setShowR(false)}>
        <Modal.Header closeButton>
          <Modal.Title>Registro</Modal.Title>
        </Modal.Header>

        <Modal.Body>
          <Registro />
        </Modal.Body>

        <Modal.Footer>
          <p className="d-flexjustify-content-start ">
            ¿Ya tienes una cuenta?{" "}
            <a
              className="link"
              onClick={handleShowL}
              style={{ cursor: "pointer" }}
            >
              Ingresa aqui
            </a>
          </p>
          <Button onClick={() => setShowR(false)} variant="secondary">
            Close
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default Navegador;
