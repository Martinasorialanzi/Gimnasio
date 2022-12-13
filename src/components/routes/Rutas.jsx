import React from 'react'
import {Routes, Route} from "react-router-dom"
import EcommerceHome from '../pages/EcommerceHome'
import EcommerceAccesorios from '../pages/EcommerceAccesorios'
import EcommerceEquipos from '../pages/EcommerceEquipos'
import EcommerceIndumentaria from '../pages/EcommerceIndumentaria'
import EcommerceTodo from '../pages/EcommerceTodo'


const Rutas = () => {
  return (
    <Routes>
       <Route path='/ecommercehome' element={<EcommerceHome/>}/>
       <Route path='/ecommerce-indumentaria' element={<EcommerceIndumentaria/>}/>
       <Route path='/ecommerce-accesorios' element={<EcommerceAccesorios/>}/>
       <Route path='/ecommerce-equipos' element={<EcommerceEquipos/>}/>
       <Route path='/ecommerce-all' element={<EcommerceTodo/>}/>
    </Routes>
  )
}

export default Rutas