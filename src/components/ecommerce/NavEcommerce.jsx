import React from 'react'
import { Nav } from 'react-bootstrap'
import CarritoCompras from '../carritoCompras/CarritoCompras'
import { categorias } from '../helpers/categorias'
import { Link } from 'react-router-dom'


const NavEcommerce = () => {
  return (
    <Nav justify variant="tabs" defaultActiveKey="/ecommerce">
  
    {categorias.map((categoria)=>{
      return(
      <Nav.Item key={categoria.id}>
        <Nav.Link href={`/ecommerce-categoria/${categoria.nombre}`}className='text-dark'>{ categoria.nombre}</Nav.Link>
      </Nav.Item>
      )

    })}  
     
      <Nav.Item>
      <CarritoCompras/>
      </Nav.Item>
      
    </Nav>
  )
}

export default NavEcommerce