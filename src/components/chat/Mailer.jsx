import React from 'react';
import { useRef } from 'react';
import { useEffect } from 'react';
import { Container, } from 'react-bootstrap';
import emailjs from '@emailjs/browser';
import './Mailer.css'


const Mailer = () => {
    
    const inputform = useRef(null); 

    useEffect(() => {
        inputform.current.focus()
      
      })
    
    

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_o1bi7xw', 'template_5llduc9', e.target, 'ZeW1Ssurf-xesG-Ui').then(res => console.log(res))
        e.target.reset()
            .catch(error => console.log(error))
        
    }
    


  return (
      <Container>
          <form  onSubmit={sendEmail} className="text-center">
              <label >Nombre</label>
              <input type="text" name="user_name" ref={inputform} />
              <hr />
              <label>Email</label>
              <input type="email" name="user_email"  />
              <hr />
              <label>Mensaje</label>
              <textarea name="user_message" />
              <hr />
              <button className='mailer-color-boton' >Enviar</button>
          </form>
      </Container>
  )
}

export default Mailer