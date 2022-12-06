import React from 'react'
import {Routes, Route} from "react-router-dom"
import EcommerceHome from '../pages/EcommerceHome'


const Rutas = () => {
  return (
    <Routes>
       <Route path='/ecommercehome' element={<EcommerceHome/>}/>
    </Routes>
  )
}

export default Rutas