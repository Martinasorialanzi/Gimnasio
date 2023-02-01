import React from 'react'
import {Routes, Route} from "react-router-dom"
import AcercaDe from '../pages/acercaDe/AcercaDe';
import Home from "../pages/Home";
import PreguntasFrecuentes from "../pages/preguntasFrecuentes/PreguntasFrecuentes"




const Rutas = () => {
  return (
    <Routes>
      
       <Route path="/" element={<Home/>} />
       <Route path="/acercade" element={<AcercaDe/>} />
       <Route path="/preguntasfrecuentes" element={<PreguntasFrecuentes/>} />
       
    </Routes>
  )
}

export default Rutas