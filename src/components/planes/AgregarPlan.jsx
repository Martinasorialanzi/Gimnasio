import React from 'react'
import { useState } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './planes.css'
import uniquid from 'uniqid';
import NavegadorAdmin from '../navegador/NavegadorAdmin';

const AgregarPlan = () => {
    const [idPlan, setIdplan] = useState('');
    const [nombrePlan, setNombreplan] = useState('');
    const [description, setDescription] = useState('');
    const [precio, setPrecio] = useState('');
    const navegar = useNavigate()
    
    const baseUrl = "https://gimansio-backend.vercel.app"
  

    const agregarPlan = (e) => {

        e.preventDefault()
        const plan = {
            idPlan: idPlan,
            nombrePlan: nombrePlan,
            description: description,
            precio: precio,
            codigoPlan: uniquid()
        }



        axios.post(`${baseUrl}/v1/agregarplan`, plan)
            .then(res => {
                // alert(res.data)

                // Swal.fire('Listo', 'Usuario agregado exitosamente', 'success')
            })
            .then(err => { console.log(err) })
        navegar('/planes')



    }


  return (
      <>
      <NavegadorAdmin/>
      
          <div className='body-mailer-chat'>
              <div className='form-mail-chat  mt-2 '>
                  <h1 className='title-form text-center h1-chat '>Plan</h1>
                  <form onSubmit={agregarPlan} className="text-center mt-1">
                      <label className='mt-1 label-chat'>Codigo</label><br />
                      <input required type="number" max={9} min={1} maxLength={1} minLength={1}  className='mt-1 input-chat' onChange={(e) => { setIdplan(e.target.value) }} /><br />

                      <label className='mt-1 label-chat'>Nombre del plan</label><br />
                      <input required type="text" className='mt-1 input-chat' onChange={(e) => { setNombreplan(e.target.value.toUpperCase()) }} maxLength={30} /><br />

                      <label className='mt-1 label-chat'>Descripción</label><br />
                      <textarea required type="text" className='mt-1 input-chat textarea-chat' onChange={(e) => { setDescription((e.target.value.toLocaleUpperCase())) }} maxLength={80} /><br />
                      

                      <label className='mt-1 label-chat'>Precio por hora</label><br />
                      <input required type="number" className='mt-1 mb-2 input-chat' onChange={(e) => { setPrecio(e.target.value) }} max={100000} min={1000 } /><br />

                      <button className='button-chat mt-1' >Enviar</button>
                      <Link to={'/planes'}><button className='button-chat mt-1' >Volver</button></Link>
                  </form>
              </div>
          </div>
      
      </>
  )
}

export default AgregarPlan