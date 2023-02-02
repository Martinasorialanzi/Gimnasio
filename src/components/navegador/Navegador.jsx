import React, { useState } from "react";
import { Navbar, Container, Nav, NavDropdown, Modal,
  Button, } from "react-bootstrap";
import "../navegador/nav.css"
import Swal from "sweetalert2";
import Login from "../../components/ingreso/Login";
import Registro from "../../components/ingreso/Register";
import CarritoCompras from "../ecommerce/carritoCompras/CarritoCompras";

const Navegador = ({ allProducts, setAllProducts }) => {

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
    <Navbar bg="dark" variant="dark" expand="lg" className="navbar">
      <Container>
        <Navbar.Brand href="/">GYM</Navbar.Brand>
        <Navbar.Toggle aria-controls="basic-navbar-nav" />
        <Navbar.Collapse id="basic-navbar-nav">
          <Nav className="me-auto">

            <NavDropdown title="Tienda Online"  id="basic-nav-dropdown">
              <NavDropdown.Item href="/ecommercehome">Tienda</NavDropdown.Item>
              <NavDropdown.Item href="/ecommerce-categoria/indumentaria">Indumentaria</NavDropdown.Item>
              <NavDropdown.Item href="/ecommerce-categoria/accesorios">Accesorios</NavDropdown.Item>
              <NavDropdown.Item href="/ecommerce-categoria/equipos">Equipos</NavDropdown.Item>
              <NavDropdown.Item href="/ecommerce-categoria/all">Ver todo</NavDropdown.Item>
              
            </NavDropdown>
            <Nav.Link href="/acercade">Acerca de nosotros</Nav.Link>
        
          </Nav>
          <Nav.Link onClick={handleShowR}>Crear cuenta&nbsp;&nbsp;|</Nav.Link>
          <Nav.Link onClick={() => setShowL(true)}>
            &nbsp;&nbsp;Iniciar sesión&nbsp;&nbsp;
          </Nav.Link>
          <Nav.Link href="#home">
          <CarritoCompras
          allProducts={allProducts}
          setAllProducts={setAllProducts}
        />
          </Nav.Link>
        
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