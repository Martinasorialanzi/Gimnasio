import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import emailjs from '@emailjs/browser';
import './Mailer.css';
import Swal from 'sweetalert2';
import { Link } from 'react-router-dom';




const Mailer = () => {
    
    const inputform = useRef(null); 

    useEffect(() => {
        inputform.current.focus()
      
      })
    
    

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_o1bi7xw', 'template_5llduc9', e.target, 'ZeW1Ssurf-xesG-Ui').then(res => console.log(res))
        e.target.reset()
        Swal.fire('Enhorabuena', 'Tu mensaje ha sido enviado', 'success')
            .catch(error => console.log(error))
        Swal.fire('Ups', 'Tu mensaje no podido enviarse', 'error')
        
    }
    


    return (
      <div className='body-mailer-chat'>
        <div className='form-mail-chat  mt-2 '>
          <h1 className='title-form text-center h1-chat '>Enviar mensaje a un usuario</h1>
          <form onSubmit={sendEmail} className="text-center mt-1">
            <label className='mt-1 label-chat'>Nombre</label><br />
            <input required type="text" name="user_name" ref={inputform} className='mt-1 input-chat' maxLength={15} minLength={3} /><br />

            <label className='mt-1 label-chat'>Email</label><br />
            <input required type="email" name="user_email" className='mt-1 input-chat' maxLength={50} minLength={15} /><br />

            <label className='mt-1 label-chat'>Mensaje</label><br />
            <textarea required name="user_message" className='mt-1 textarea-chat ' maxLength={50} minLength={4} /><br />

            <button className='button-chat mt-1' >Enviar</button>
            <Link to={'/admin'}><button className='button-chat mt-1' >Volver</button></Link>
          </form>
        </div>
      </div>
  )
}

export default Mailer