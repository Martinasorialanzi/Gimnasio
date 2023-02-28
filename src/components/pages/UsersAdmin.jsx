import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import {  GetUsers } from "../helpers/GetUsers";
import NavegadorAdmin from "../navegador/NavegadorAdmin";
import '../admin/Listado.css'

// import ModalAgregar from "../ecommerce/modalUpdateEdit/ModalAgregar";


const UsersAdmin = () => {
    
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const getUsers = async () => {
      const response = await GetUsers();
      setUsers(response.data.users);
      
    };
    
    getUsers();
  }, [users]);
  

  
  return(
    <>
    <NavegadorAdmin/>
      {/* <ModalAgregar/> */}
      <h1 className="text-center mt-4 ">Lista de administradores</h1>
      

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th className='back-tabla-listado text-light'>id</th>
            <th className='back-tabla-listado text-light'>Nombre</th>
            <th className='back-tabla-listado text-light'>Apellido</th>
            <th className='back-tabla-listado text-light'>email</th>
            <th className='back-tabla-listado text-light'>contraseña</th>

            
          </tr>
        </thead>
        <tbody>
          {users.map((user) => {
            return (
              <tr key={user._id}>
                <td>{user._id}</td>
                <td>{user.name}</td>
                <td>{user.lastname}</td>
                <td>{user.email}</td>
                <td>{user.password}</td>
                
               
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  
  )
};

export default UsersAdmin;