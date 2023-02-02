import React from 'react';
import Table from 'react-bootstrap/Table';
import { Container } from 'react-bootstrap';
import { FaPen, FaTrash } from "react-icons/fa";

const Turnos = () => {
  return (
      <>
          <h1 className='text-center'>Turnos</h1>
          <Container className='text-center'>
          <Table striped bordered hover>
              <thead>
                  <tr>
                      <th>Horario</th>
                      <th>Cupo Total</th>
                      <th>Disponibles</th>
                      <th>Entrenador</th>
                      <th>Editar</th>
                  </tr>
              </thead>
              <tbody>
                  <tr>
                      <td>Mañana</td>
                      <td>20</td>
                      <td>20</td>
                          <td>Juan</td>
                          <td><div className='text-center'><FaPen className='fs-5 me-3' /><FaTrash className='ms-3 fs-5' /></div></td>
                  </tr>
                  <tr>
                      <td>Tarde</td>
                      <td>20</td>
                      <td>20</td>
                          <td>Graciela</td>
                          <td><div className='text-center'><FaPen className='fs-5 me-3' /><FaTrash className='ms-3 fs-5' /></div></td>
                  </tr>
                  <tr>
                      <td>Noche</td>
                      <td>20</td>
                      <td>20</td>
                          <td>Nicolas</td>
                          <td><div className='text-center'><FaPen className='fs-5 me-3' /><FaTrash className='ms-3 fs-5' /></div></td>
                  </tr>
              </tbody>
              </Table>
          </Container>
      </>
  )
}

export default Turnos