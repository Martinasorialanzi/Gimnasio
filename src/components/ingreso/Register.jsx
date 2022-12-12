import React, { useState, useEffect } from "react";
import Button from "react-bootstrap/Button";
import Form from "react-bootstrap/Form";
import axios from 'axios'
import Swal from 'sweetalert2'


const Registro = () => {
  const [name, setName] = useState("");
  const [lastname, setLastname] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [contraseña, setContraseña] = useState(false);
  


  
const validacion = () => {
  if(password !== confirmPassword){
    setContraseña(true)
  }else {
    setContraseña(false)
  }
}
useEffect(() => {
validacion()
}, [password,confirmPassword])

  const handleSubmit = (e) => {
    e.preventDefault();
    if(password === confirmPassword){

      const data = {
        name,
        lastname,
        email,
        password,
        confirmPassword
      }

      const response = funcionRegistro(data);
      console.log(response);


    if (response.status === 200) {
      Swal.fire({
        icon: "success",
        title: "Registrado",
        text: "Registro exitoso",
      });
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "hay algun error en tu registro",
      });
    }
      

      setName("")
      setLastname("")
      setEmail("")
      setPassword("")
      setConfirmPassword("")

      
      
    } else {
      Swal.fire({
        icon: "error",
        title: "Error",
        text: "Las contraseñas no coinciden",
      });
    };
  
    
    console.log(usuarios);
    
  };

  return (
    <Form controlId="form" onSubmit={handleSubmit}>
      <Form.Group className="mb-3" controlId="formBasicName">
        <Form.Label>Nombre</Form.Label>
        <Form.Control
          type="name"
          placeholder="Enter name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicLastname">
        <Form.Label>Apellido</Form.Label>
        <Form.Control
          type="lastname"
          placeholder="Enter lastname"
          value={lastname}
          onChange={(e) => setLastname(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicEmail">
        <Form.Label>Email address</Form.Label>
        <Form.Control
          type="email"
          placeholder="Enter email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
        <Form.Text className="text-muted">
          We'll never share your email with anyone else.
        </Form.Text>
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicPassword">
        <Form.Label>Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />
      </Form.Group>

      <Form.Group className="mb-3" controlId="formBasicConfirmPassword">
        <Form.Label>Confirm Password</Form.Label>
        <Form.Control
          type="password"
          placeholder="Password"
          value={confirmPassword}
          onChange={(e) => setConfirmPassword(e.target.value)}
        />
         <Form.Text className="text-muted">
         {contraseña ? "Las contraseñas no coinciden" : "Las contraseñas coinciden "}
        </Form.Text>
    
      </Form.Group>
      <Form.Group className="mb-3" controlId="formBasicCheckbox">
        <Form.Check type="checkbox" label="Check me out" />
      </Form.Group>
      <Button variant="primary" type="submit">
        Submit
      </Button>
    </Form>
  );
};

export default Registro;


