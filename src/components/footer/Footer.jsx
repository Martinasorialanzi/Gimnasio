import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import "../footer/footer.css"


const Footer = () => {
  return (
    <>
      <Navbar  bg="dark" className="flex-column footer">
        <Nav.Link href="/home">Contacto</Nav.Link>
        <Nav.Link eventKey="link-1">Trabaja con nosotros</Nav.Link>
        <Nav.Link eventKey="link-2">Preguntas frecuentes</Nav.Link>
        <p>© 2022 Company, Inc. All rights reserved.</p>
      </Navbar>
    </>
  );
};

export default Footer; 