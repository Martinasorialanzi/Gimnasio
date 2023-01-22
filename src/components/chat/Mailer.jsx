import React from 'react';
import { useRef } from 'react';

import { Container, } from 'react-bootstrap';

import emailjs from '@emailjs/browser';


const Mailer = () => {
    const form = useRef();

    const sendEmail = (e) => {
        e.preventDefault();
        emailjs.sendForm('service_o1bi7xw', 'template_5llduc9', e.target, 'ZeW1Ssurf-xesG-Ui').then(res => console.log(res))
        .catch(error=>console.log(error))
    }


  return (
      <Container>
          <form ref={form} onSubmit={sendEmail} className="text-center">
              <label>Nombre</label>
              <input type="text" name="user_name" />
              <hr />
              <label>Email</label>
              <input type="email" name="user_email" />
              <hr />
              <label>Mensaje</label>
              <textarea name="user_message" />
              <hr />
              <button variant="outline-success">Success</button>
          </form>
      </Container>
  )
}

export default Mailer