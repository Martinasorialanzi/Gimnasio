import React from 'react'
import { Nav, Navbar, Container } from 'react-bootstrap'
import CarritoCompras from '../carritoCompras/CarritoCompras'

const EcommerceHome = () => {
  return (
    <>
    <h1>Ecommerce</h1>
    <CarritoCompras/>
    
    <Nav justify variant="tabs" defaultActiveKey="/ecommerce">
      <Nav.Item>
        <Nav.Link href="/home">Indumentaria</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-1">Accesorios</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link eventKey="link-2">Sumplementos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home">Equipos</Nav.Link>
      </Nav.Item>
      
    </Nav>
    </>
   
  )
}

export default EcommerceHome