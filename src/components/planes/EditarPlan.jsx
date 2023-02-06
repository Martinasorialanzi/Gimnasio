import React from 'react'
import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate, useParams } from 'react-router-dom';
import { Link } from 'react-router-dom';
import './planes.css'
import Swal from 'sweetalert2';
import NavegadorAdmin from '../navegador/NavegadorAdmin';


const EditarPlan = () => {
    const params = useParams();

    const [idPlan, setIdplan] = useState('');
    const [nombrePlan, setNombreplan] = useState('');
    const [description, setDescription] = useState('');
    const [precio, setPrecio] = useState('');
    const navegar = useNavigate()


    const baseUrl = "https://gimansio-backend.vercel.app"

    useEffect(() => {
        axios.post(`${baseUrl}/v1/obtenerdataplan`, { codigoPlan: params.codigoPlan }).then(res => {
            console.log(res.data[0])
            const dataPlan = res.data[0]
            setIdplan(dataPlan.idPlan)
            setNombreplan(dataPlan.nombrePlan)
            setDescription(dataPlan.description)
            setPrecio(dataPlan.precio)
        })
    }, [])

    //Funcion de editar Usuario
    const editarPlan = () => {
        const actualizarPlan = {
            idPlan: idPlan,
            nombrePlan: nombrePlan,
            description: description,
            precio: precio,
            codigoPlan: params.codigoPlan
        }

        axios.post(`${baseUrl}/v1/actualizarplan`, actualizarPlan).then(() => {
            // alert(res.data)
            Swal.fire('Listo', 'Usuario editado Exitosamente', 'success')
            navegar("/planes")
        }).then(err => {
            console.log(err)
        })
        navegar('/planes')
    }


  return (
      <>
      <NavegadorAdmin/>
          <div className='body-mailer-chat'>
              <div className='form-mail-chat  mt-2 '>
                  <h1 className='title-form text-center h1-chat '>Plan</h1>
                  <form onSubmit={editarPlan} className="text-center mt-1">
                      <label className='mt-1 label-chat'>Identificación Plan</label><br />
                      <input required type="number" max={9} min={1} maxLength={1} minLength={1} className='mt-1 input-chat' value={idPlan} onChange={(e) => { setIdplan(e.target.value) }} /><br />

                      <label className='mt-1 label-chat'>Nombre del plan</label><br />
                      <input required type="text" className='mt-1 input-chat' onChange={(e) => { setNombreplan(e.target.value.toUpperCase()) }} value={nombrePlan} maxLength={30} /><br />

                      <label className='mt-1 label-chat'>Descripción</label><br />
                      <textarea required type="text" className='mt-1 input-chat textarea-chat' onChange={(e) => { setDescription((e.target.value.toLocaleUpperCase())) }} value={description} maxLength={80} /><br />


                      <label className='mt-1 label-chat'>Precio por hora</label><br />
                      <input required type="number" className='mt-1 mb-2 input-chat' onChange={(e) => { setPrecio(e.target.value) }} value={precio} max={100000} min={1000} /><br />

                      <button className='button-chat mt-1' >Enviar</button>
                      <Link to={'/planes'}><button className='button-chat mt-1' >Volver</button></Link>
                  </form>
              </div>
          </div>
      </>
  )
}

export default EditarPlan