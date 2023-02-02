import React from 'react'
import {Routes, Route} from "react-router-dom"
import AdminProducts from '../pages/AdminProducts'
import EcommerceCategoria from '../pages/EcommerceCategoria'
import EcommerceDetalleProducto from '../pages/EcommerceDetalleProducto'
import EcommerceHome from '../pages/EcommerceHome'

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
       <Route path='/ecommercehome' element={<EcommerceHome/>}/>
       <Route path='/ecommerce-producto/:_id' element={<EcommerceDetalleProducto/>}/>
       <Route path='/ecommerce-categoria/:categoria' element={<EcommerceCategoria/>}/>
       <Route path='/admin/productos' element={<AdminProducts/>}/>

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
  
             <Route path="/" element={<Home/>} />
       <Route path="/acercade" element={<AcercaDe/>} />
       <Route path="/preguntasfrecuentes" element={<PreguntasFrecuentes/>} />
       
      

    </Routes>
  )
}

export default Rutas