import React from 'react'
import { Routes, Route } from "react-router-dom"
import Admin from '../admin/Admin'


const Rutas = () => {
  return (
    <Routes>
      <Route path="/admin" element={<Admin />} />
      {/* lo ponga aca al admin y lo hago libre de ingreso hasta que finalice la parte estetica despues empiezo a trabajar en el acceso restringido */}
    </Routes>
  )
}

export default Rutas