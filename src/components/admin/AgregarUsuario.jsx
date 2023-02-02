import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import uniquid from 'uniqid';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import './Listado.css'



const AgregarUsuario = () => {
    
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [correo, setCorreo] = useState('');
    const [celular, setCelular] = useState('');
    const [plan, setPlan] = useState('')
    const navegar = useNavigate();

  



    const agregarUsuario = (e) => {

        e.preventDefault()
        const usuario = {
            nombre: nombre,
            edad: edad,
            correo: correo,
            celular: celular,
            plan: plan,
            idUsuario: uniquid()
        }



        axios.post('/v1/agregarusuario', usuario)
            .then(res => {
                // alert(res.data)

                Swal.fire('Listo', 'Usuario agregado exitosamente', 'success')
            })
            .then(err => { console.log(err) })
        navegar('/listadeusuarios')



    }
  return (
      <>
          
          <h1 className='text-center h1-titulo-form-ag-ed mt-4 mb-4'>Agregar Usuario</h1>
          
          <Container>
              
              <Form className='text-center' onSubmit={agregarUsuario}>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label className='etiqueta-formulario-ag-ed'>Nombre</Form.Label>
                      <Form.Control required type="text" className=' m-auto input-form-ag-ed' value={nombre} onChange={(e) => { setNombre(e.target.value) }} maxLength={15} minLength={3} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className='etiqueta-formulario-ag-ed'>Edad</Form.Label>
                      <Form.Control required type="number" className='m-auto input-form-ag-ed' value={edad} onChange={(e) => { setEdad(e.target.value) }} max="100" min="10"
                           />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className='etiqueta-formulario-ag-ed'>Correo</Form.Label>
                      <Form.Control required type="email" className=' m-auto input-form-ag-ed' value={correo} onChange={(e) => { setCorreo(e.target.value) }} pattern="[^@\s]+@[^@\s]+" maxLength={50} minLength={13} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className='etiqueta-formulario-ag-ed'>Celular</Form.Label>
                      <Form.Control required type="number" className=' m-auto input-form-ag-ed' value={celular} onChange={(e) => { setCelular(e.target.value) }} max="999999999999" min="1111111111"
                          />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label className='etiqueta-formulario-ag-ed'>Plan</Form.Label>
                      <Form.Control required type="text" className=' m-auto input-form-ag-ed' value={plan} onChange={(e) => { setPlan(e.target.value) }} max="004" min="001"  />
                  </Form.Group>
                  <Button variant="primary" type="submit" n className='me-2 botones-formularios-ag-ed' >
                      Guardar
                  </Button>
                  <Link to='/listadeusuarios' ><Button variant="primary" type="submit" className='ms-2 botones-formularios-ag-ed'>
                      Volver
                  </Button></Link>
                  
              </Form>

          </Container>
      </>
  )
}

export default AgregarUsuario