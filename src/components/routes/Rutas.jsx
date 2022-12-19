import React from 'react'
import {Routes, Route} from "react-router-dom"
import EcommerceCategoria from '../pages/EcommerceCategoria'
import EcommerceDetalleProducto from '../pages/EcommerceDetalleProducto'
import EcommerceHome from '../pages/EcommerceHome'


const Rutas = () => {
  return (
    <Routes>
       <Route path='/ecommercehome' element={<EcommerceHome/>}/>
       <Route path='/ecommerce-producto/:id' element={<EcommerceDetalleProducto/>}/>
       <Route path='/ecommerce-categoria/:categoria' element={<EcommerceCategoria/>}/>
    </Routes>
  )
}

export default Rutas