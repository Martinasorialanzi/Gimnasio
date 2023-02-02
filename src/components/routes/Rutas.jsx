import React from 'react'

import { Routes, Route } from "react-router-dom"
import Admin from '../admin/Admin'
import AgregarUsuario from '../admin/AgregarUsuario'
import EditarUsuario from '../admin/EditarUsuario'
import ListasDeUsuarios from '../admin/ListaDeUsuarios'

import Chat from '../chat/Chat'
import ChatParticular from '../chat/ChatParticular'
import Clientes from '../listaClientes/Clientes'
import Turnos from '../turnos/Turnos'
import Planes from '../planes/Planes'
import AgregarPlan from '../planes/AgregarPlan'

import EditarPlan from '../planes/EditarPlan'
import AcercaDe from '../pages/acercaDe/AcercaDe';
import Home from "../pages/Home";
import PreguntasFrecuentes from "../pages/preguntasFrecuentes/PreguntasFrecuentes"




const Rutas = () => {
  return (
    <Routes>

      <Route path="/admin" element={<Admin />} />
      <Route path="/clientes" element={<Clientes />} />
      <Route path="/chat" element={<Chat />} />
      <Route path="/turnos" element={<Turnos />} />
      <Route path="/agregarusuario" element={<AgregarUsuario />} exact />
      <Route path="/listadeusuarios" element={<ListasDeUsuarios />} exact />
      <Route path="/editarusuario/:idUsuario" element={<EditarUsuario />} exact />
      <Route path="/chat" element={<Chat />} exact />
      <Route path="/chatparticular/:idUsuario" element={<ChatParticular />} exact />
      <Route path="/planes" element={<Planes />} exact />
      <Route path="/agregarplan" element={<AgregarPlan />} exact />
      <Route path="/editarplan/:codigoPlan" element={<EditarPlan />} exact />
      {/* lo ponga aca al admin y lo hago libre de ingreso hasta que finalice la parte estetica despues empiezo a trabajar en el acceso restringido */}
      

             <Route path="/" element={<Home/>} />
       <Route path="/acercade" element={<AcercaDe/>} />
       <Route path="/preguntasfrecuentes" element={<PreguntasFrecuentes/>} />
       
      

    </Routes>
  )
}

export default Rutas