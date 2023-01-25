import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import { FaPen, FaTrash } from "react-icons/fa";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'

const ListasDeUsuarios = () => {
    const [dataUsuarios, setDataUsuarios] = useState([])
    const navegar = useNavigate()


    useEffect(() => {
        axios.get('/v1/obtenerlistadeusuarios').then(res => {
            console.log(res.data)
            setDataUsuarios(res.data)
        }).catch(err => {
            console.log(err)
        })
    }, [])
    // const Swal = require('sweetalert2')

    const borrarUsuario = (idUsuario) => {
        axios.post('/v1/borrarusuario', { idUsuario: idUsuario }).then(res => {
            console.log(res.data)
            // alert(res.data)
            Swal.fire('Listo', 'Usuario Eliminado Correctamente', 'info', 'Ok')
            navegar(0)
        }).catch((err) => {
            console.log(err)


        })
    }

    //MAPEAMOS LISTA DE USUARIOS
    const listausuarios = dataUsuarios.map(usuario => {
        return (
            <tbody className='text-center'>
                <tr>
                    <td>{usuario.idUsuario}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.edad}</td>
                    <td>{usuario.correo}</td>
                    <td>{usuario.celular}</td>
                    <td>{usuario.plan}</td>
                    <td><a href="/admin">Ver más</a></td>
                    <td><div className='text-center'>
                        <Link to={`/editarusuario/${usuario.idUsuario}`} className='hipervinculos-sin-azul'><FaPen className='fs-5 me-3 text-dark' /></Link>
                        <FaTrash className='ms-3 fs-5' type='button' onClick={() => { borrarUsuario(usuario.idUsuario) }} /></div></td>
                </tr>
            </tbody>
        )
    })

    return (
        <>
            <h1 className='text-center mt-5'>Listado de Usuarios</h1>
            <div className='text-center mb-2'>
                <Link to='/agregarusuario'><button className='mb-5 mt-5'>Agregar Usuario</button></Link>
                <Table striped bordered hover size="sm">
                    <thead className='text-center'>
                        <tr>
                            <th>Número</th>
                            <th>Nombres y Apellido</th>
                            <th>Edad</th>
                            <th>Correo</th>
                            <th>Celular</th>
                            <th>Plan Asignado</th>
                            <th>Cuotas</th>
                            <th>Editar</th>
                        </tr>
                    </thead>
                    {listausuarios}
                </Table>

            </div>

        </>
    )
}

export default ListasDeUsuarios