import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import uniquid from 'uniqid';
import { useState } from 'react';
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
// import Swal from 'sweetalert2';


const AgregarUsuario = () => {
    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [correo, setCorreo] = useState('');
    const [celular, setCelular] = useState('');
    const [plan, setPlan] = useState('')
    const navegar = useNavigate();

    const agregarUsuario = () => {
        const usuario = {
            nombre: nombre,
            edad: edad,
            correo: correo,
            celular: celular,
            plan: plan,
            idUsuario: uniquid()
        }

        console.log(usuario)

        axios.post('/api/usuario/agregarusuario', usuario)
            .then(res => {
                alert(res.data)
                // Swal.fire('Listo', 'Usuario agregado exitosamente', 'success')
            })
            .then(err => { console.log(err) })
        navegar('/listadeusuarios')
    }
  return (
      <>
          <h1>Agregar un Cliente</h1>
          <Container>
              <Form>
                  <Form.Group className="mb-3" controlId="formBasicEmail">
                      <Form.Label>Nombre</Form.Label>
                      <Form.Control type="text" className='w-25 m-auto' value={nombre} onChange={(e) => { setNombre(e.target.value) }} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Edad</Form.Label>
                      <Form.Control type="text" className='w-25 m-auto' value={edad} onChange={(e) => { setEdad(e.target.value) }} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Correo</Form.Label>
                      <Form.Control type="text" className='w-25 m-auto' value={correo} onChange={(e) => { setCorreo(e.target.value) }} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Celular</Form.Label>
                      <Form.Control type="text" className='w-25 m-auto' value={celular} onChange={(e) => { setCelular(e.target.value) }} />
                  </Form.Group>
                  <Form.Group className="mb-3" controlId="formBasicPassword">
                      <Form.Label>Plan</Form.Label>
                      <Form.Control type="text" className='w-25 m-auto' value={plan} onChange={(e) => { setPlan(e.target.value) }} />
                  </Form.Group>
                  <Button variant="primary" type="submit" onClick={agregarUsuario}>
                      Guardar
                  </Button>
              </Form>
              <Link to='/listadeusuarios'><Button variant="primary" type="submit" className='mt-5'>
                  lista de Usuarios
              </Button></Link>
          </Container>
      </>
  )
}

export default AgregarUsuario