import React from 'react';
import { useRef } from 'react';
import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import axios from 'axios';
import { useParams, useNavigate } from 'react-router-dom';
import Swal from 'sweetalert2';
import emailjs from '@emailjs/browser';
import NavegadorAdmin from '../navegador/NavegadorAdmin';




const ChatParticular = () => {

    const params = useParams();

    const navegar = useNavigate();
    const [nombre, setNombre] = useState('');
    const [correo, setCorreo] = useState('');

    
    const inputform = useRef(null);

    useEffect(() => {
        inputform.current.focus()

    })

    useEffect(() => {
        axios.post('/v1/obtenerdatausuario', { idUsuario: params.idUsuario }).then(res => {
            console.log(res.data[0])
            const dataUsuario = res.data[0]
            setNombre(dataUsuario.nombre)
            setCorreo(dataUsuario.correo)
        })
    }, [])

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_o1bi7xw', 'template_5llduc9', e.target, 'ZeW1Ssurf-xesG-Ui').then(res => console.log(res))
        e.target.reset()
        Swal.fire('Enhorabuena', 'Tu mensaje ha sido enviado', 'success')
        navegar('/listadeusuarios')
            .catch(error => console.log(error))
        Swal.fire('Ups', 'Tu mensaje no podido enviarse', 'error')

    }



  return (
    <>
    <NavegadorAdmin/>
 
      <div className='body-mailer-chat'>
          <div className='form-mail-chat  mt-2 '>
              <h1 className='title-form text-center h1-chat '>Enviar mensaje a un usuario</h1>
              <form className="text-center mt-1" onSubmit={sendEmail}>
                  <label className='mt-1 label-chat'>Nombre</label><br />
                  <input required type="text" name="user_name" ref={inputform} value={nombre} className='mt-1 input-chat' /><br />

                  <label className='mt-1 label-chat'>Email</label><br />
                  <input required type="email" name="user_email" value={correo} className='mt-1 input-chat' /><br />

                  <label className='mt-1 label-chat'>Mensaje</label><br />
                  <textarea required name="user_message" className='mt-1 textarea-chat ' /><br />

                  <button className='button-chat mt-1' >Enviar</button>
                  <Link to={'/listadeusuarios'}><button className='button-chat mt-1' >Volver</button></Link>
              </form>
          </div>
      </div>
      </>
  )
}

export default ChatParticular