import React from 'react'
import { Nav } from 'react-bootstrap'
import CarritoCompras from '../carritoCompras/CarritoCompras'


const NavEcommerce = () => {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/ecommerce">
    <Nav.Item>
        <Nav.Link href="/ecommerce-all" className='text-dark'>Todo</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/ecommerce-indumentaria" className='text-dark' >Indumentaria</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/ecommerce-accesorios" className='text-dark'>Accesorios</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/ecommerce-equipos" className='text-dark'>Equipos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
      <CarritoCompras/>
      </Nav.Item>
      
    </Nav>
  )
}

export default NavEcommerce