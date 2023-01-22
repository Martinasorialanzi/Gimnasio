import React from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import Container from 'react-bootstrap/Container';
import { useState, useEffect } from 'react';
import { Link, useNavigate, useParams } from 'react-router-dom';
import axios from 'axios';
import Swal from 'sweetalert2';

const EditarUsuario = () => {
    const params = useParams();

    const [nombre, setNombre] = useState('');
    const [edad, setEdad] = useState('');
    const [correo, setCorreo] = useState('');
    const [celular, setCelular] = useState('');
    const [plan, setPlan] = useState('');


    const navegar = useNavigate();


    useEffect(() => {
        axios.post('/api/usuario/obtenerdatausuario', { idUsuario: params.idUsuario }).then(res => {
            console.log(res.data[0])
            const dataUsuario = res.data[0]
            setNombre(dataUsuario.nombre)
            setEdad(dataUsuario.edad)
            setCorreo(dataUsuario.correo)
            setCelular(dataUsuario.celular)
            setPlan(dataUsuario.plan)
        })
    }, [])

    //Funcion de editar Usuario
    const editarUsuario = () => {
        const actualizarUsuario = {
            nombre: nombre,
            edad: edad,
            correo: correo,
            celular: celular,
            plan: plan,
            idUsuario: params.idUsuario
        }

        axios.post('/api/usuario/actualizarusuario', actualizarUsuario).then(() => {
            // alert(res.data)
            Swal.fire('Listo', 'Usuario editado Exitosamente', 'success')
        }).then(err => {
            console.log(err)
        })
        navegar('/listadeusuarios')
    }

    return (

        <>
            <h1>Editar Usuario</h1>
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
                    <Button variant="primary" type="submit" onClick={editarUsuario}  >
                        Editar
                    </Button>
                </Form>
                <Link to='/listadeusuarios'><Button variant="primary" type="submit" className='mt-5'>
                    lista de Usuarios
                </Button></Link>
            </Container>
        </>
    )
}

export default EditarUsuario