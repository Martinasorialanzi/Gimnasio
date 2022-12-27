import React from 'react'
import { Nav } from 'react-bootstrap'
import CarritoCompras from './carritoCompras/CarritoCompras'
import { categorias } from '../helpers/categorias'


const NavEcommerce = ({allProducts,setAllProduct,cantidad,setCantidad,total,setTotal}) => {
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
      <CarritoCompras allProducts={allProducts} setAllProduct={setAllProduct} cantidad={cantidad} setCantidad={setCantidad}total={total} setTotal={setTotal}/>
      </Nav.Item>
      
    </Nav>
  )
}

export default NavEcommerce