import React from 'react'
import {Routes, Route} from "react-router-dom"
import Ecommerce from '../pages/Ecommerce'


const Rutas = () => {
  return (
    <Routes>
       <Route path='/ecommerce' element={Ecommerce}/>
    </Routes>
  )
}

export default Rutas