import React from 'react'
import {Routes, Route} from "react-router-dom"
import AcercaDe from '../acercaDe/AcercaDe';
import Home from "../pages/Home";
import PreguntasFrecuentes from "../preguntasFrecuentes/PreguntasFrecuentes"




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