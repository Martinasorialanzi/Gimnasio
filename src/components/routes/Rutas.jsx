import React from 'react'
import {Routes, Route} from "react-router-dom"
import AcercaDe from '../acercaDe/AcercaDe';
import Home from "../home/Home";



const Rutas = () => {
  return (
    <Routes>
      
       <Route path="/" element={<Home/>} />
       <Route path="/acercade" element={<AcercaDe/>} />
       
    </Routes>
  )
}

export default Rutas