import React from 'react'
import {Routes, Route} from "react-router-dom"
import UsersAdmin from '../pages/UsersAdmin'


const Rutas = () => {
  return (
    <Routes>
       <Route path="/admin/users" element={<UsersAdmin />} />
    </Routes>
  )
}

export default Rutas