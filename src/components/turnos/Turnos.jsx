import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { FaPen, FaTrash } from "react-icons/fa";
import { useState } from 'react';
import { useEffect } from 'react';
import axios from 'axios';

const Turnos = () => {

    const [dataUsuarios, setDataUsuarios] = useState([])

    const turnosAL = ["Mañana", "Tarde", "Noche"];
    function aleatorio() {
        const aleat = Math.floor(Math.random() * turnosAL.length);
        
        return turnosAL[aleat];
    };

    useEffect(() => {
        axios.get('/v1/obtenerlistadeusuarios').then(res => {
            console.log(res.data)
            setDataUsuarios(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])


    const listausuarios = dataUsuarios.map(usuario => {
        return (
            <tbody>
                <tr>
                    <td>{aleatorio()}</td>

                    <td>{usuario.nombre}</td>
                    <td><div className='text-center'><FaPen className='fs-5 me-3' /></div></td>
                </tr>

            </tbody>
        )
    })
        return (

      <>
          <h1 className='text-center'>Turnos</h1>
          <Container className='text-center'>
          <Table striped bordered hover>
              <thead>
                  <tr>
                      <th>Horario</th>
                      
                      <th>Cliente</th>
                      <th>Editar</th>
                  </tr>
              </thead>
                        {listausuarios}
              </Table>
          </Container>
      </>
  )
}

export default Turnos