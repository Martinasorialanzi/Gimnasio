import React, { useState, useEffect } from 'react';
import Table from 'react-bootstrap/Table';
import {  FaPen, FaTrash } from "react-icons/fa";
import { GrMail } from "react-icons/gr";
import axios from 'axios';
import { Link, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2'
import './Listado.css'
import NavegadorAdmin from '../navegador/NavegadorAdmin';


const ListasDeUsuarios = () => {
    const [dataUsuarios, setDataUsuarios] = useState([])
    const navegar = useNavigate()
    const [isLoading, setIsLoading] = useState(true)


    const baseUrl = "https://gimansio-backend.vercel.app" 

    useEffect(() => {
        axios.get(`${baseUrl}/v1/obtenerlistadeusuarios`).then(res => {
            setDataUsuarios(res.data)
            setIsLoading(false)
        }).catch(err => {
            console.log(err)
        })
        
    }, [isLoading])
    // const Swal = require('sweetalert2')

    const borrarUsuario = (idUsuario) => {
        Swal.fire({
            title: `¿Estas seguro de querer eliminar los datos del usuario ${idUsuario} de manera definitiva?`,
            text: "Se perderán para siempre",
            icon: 'warning',
            showCancelButton: true,
            confirmButtonColor: '#E95821',
      cancelButtonColor: '#5B5B5B',
            confirmButtonText: 'Si, borrar!'
        }).then((result) => {
            if (result.isConfirmed) {
                axios.post(`${baseUrl}/v1/borrarusuario`, { idUsuario: idUsuario }).then(res => {
                    // console.log(res.data)
                    // alert(res.data)
                    Swal.fire('Listo', 'Usuario Eliminado Correctamente', 'info', 'Ok')
                    navegar(0)
                }).catch((err) => {
                    console.log(err)
                })
            }
        }
        
        
        )
        
    }

    //MAPEAMOS LISTA DE USUARIOS
    const listausuarios = dataUsuarios.map(usuario => {
        return (
            <>
           
            <tbody className='text-center'>
                <tr>
                    <td>{usuario.idUsuario}</td>
                    <td>{usuario.nombre}</td>
                    <td>{usuario.edad}</td>
                    <td>{usuario.correo}</td>
                    <td>{usuario.celular}</td>
                    <td>{usuario.plan}</td>
                    
                    <td><div className='text-center'>
                        <Link to={`/chatparticular/${usuario.idUsuario}`} ><GrMail className='me-3 fs-4 text-dark' /></Link>
                        <Link to={`/editarusuario/${usuario.idUsuario}`} ><FaPen className='fs-5 me-2 text-dark' /></Link>
                        <FaTrash className='ms-2 fs-5' type='button' onClick={() => { borrarUsuario(usuario.idUsuario) }} /></div></td>
                </tr>
            </tbody>
            </>
        )
    })

    return (
        <>
             <NavegadorAdmin/>
             <h1 className="text-center mt-4 ">Listado de Usuarios</h1>
            <div className='text-center mb-2 container'>
            <hr/>
            <div className="container-agregar-usuario">
                <Link to='/agregarusuario'><button className='button-listado m-2'>  Agregar Usuario </button></Link>
                </div>
                <hr/>
                <Table striped bordered hover size="xs" responsive="xl">
                    <thead className='text-center'>
                        <tr>
                            <th className='back-tabla-listado text-light'>Codigo Usuario</th>
                            <th className='back-tabla-listado text-light'>Nombres y Apellido</th>
                            <th className='back-tabla-listado text-light'>Edad</th>
                            <th className='back-tabla-listado text-light'>Correo</th>
                            <th className='back-tabla-listado text-light'>Celular</th>
                            <th className='back-tabla-listado text-light'>Plan Asignado</th>
                            {/* <th className='back-tabla-listado text-light'>Cuotas</th> */}
                            <th className='back-tabla-listado text-light'>Editar</th>
                        </tr>
                    </thead>
                    {listausuarios}
                </Table>

                </div>
            

        </>
    )
}

export default ListasDeUsuarios