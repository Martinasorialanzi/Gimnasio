import React from 'react';
import { Link } from 'react-router-dom';



const Clientes = () => {
  return (
      <>
          <h1 className='text-center'>Listado de Clientes</h1>
          <Link to="/listadeusuarios"><button>Lista de Clientes</button></Link>
         
      </>
  )
}

export default Clientes