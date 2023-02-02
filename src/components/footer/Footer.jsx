import React from "react";
import { Navbar, Nav } from 'react-bootstrap';
import "../footer/footer.css"


const Footer = () => {
  return (
    <>
      <Navbar  bg="dark" className="flex-column footer">
        
        <Nav.Link href="https://facebook.com" target="_blank">Facebook</Nav.Link>
        <Nav.Link href="https://instagram.com" target="_blank">Instagram</Nav.Link>
        <Nav.Link href="https://twitter.com/?lang=es" target="_blank">Twitter</Nav.Link>
        <Nav.Link href="/preguntasfrecuentes">Preguntas frecuentes</Nav.Link>
        <p>GYM © 2022 Company, Inc. All rights reserved.</p>
      </Navbar>
    </>
  );
};

export default Footer; 