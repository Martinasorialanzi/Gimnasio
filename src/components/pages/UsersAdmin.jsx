import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import {  GetUsers } from "../helpers/GetUsers";

// import ModalAgregar from "../ecommerce/modalUpdateEdit/ModalAgregar";


const UsersAdmin = () => {
    
  const [users, setUsers] = useState([]);
  
  useEffect(() => {
    const getUsers = async () => {
      const response = await GetUsers();
      setUsers(response.users);
    };
    
    getUsers();
  }, [users]);
  

  
  return(
    <>
      {/* <ModalAgregar/> */}
      <h1>Control de usuarios</h1>
      

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Apellido</th>
            <th>email</th>
            <th>contraseña</th>

            <th>Edit</th>
            <th>Delete</th>
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
                <td>{<Button>Edit</Button>}</td>
                {/* <td>{<Button
                 onClick={(e)=>deleteProduct(producto._id)}
                 >Delete</Button>}</td> */}
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  
  )
};

export default UsersAdmin;