import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {funcionLogin} from '../../api/Login.api'
import Swal from 'sweetalert2'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$/;

    
        const handleSubmit = (e) =>{
            e.preventDefault();
    
    //         const login = {
    //           email,
    //           password,
    //         }
    //         const response = funcionLogin(login);
    // console.log(response)
    
    // if (response.auth === true) {  //auth es un atributo del objeto response q es un booleano.
    //   Swal.fire({
    //     icon: "success",
    //     title: "Bienvenido",
    //     text: "Ingreso exitoso",
    //   }, setTimeout(() => {
    //     window.location.href = "/home"; //una vez q se logue lo redirecciono al home
    //     }, 2000));;
    // } else {
    //   Swal.fire({
    //     icon: "error",
    //     title: "Error",
    //     text: "Usuario o contraseña incorrectos",
    //   });
    // }
        }
    
        
    
    
      return (
        <>
        <Form onSubmit={handleSubmit}>
          <Form.Group className="mb-3" controlId="formBasicEmail">
            <Form.Label>Email address</Form.Label>
            <Form.Control type="email" placeholder="Enter email" value={email} onChange={(e)=>setEmail(e.target.value)} />
            <Form.Text className="text-muted">
              We'll never share your email with anyone else.
            </Form.Text>
          </Form.Group>
    
          <Form.Group className="mb-3" controlId="formBasicPassword">
            <Form.Label>Password</Form.Label>
            <Form.Control type="password" placeholder="Password" value={password} onChange={(e)=>setPassword(e.target.value)}/>
          </Form.Group>
          <Form.Group className="mb-3" controlId="formBasicCheckbox">
            <Form.Check type="checkbox" label="Check me out" />
          </Form.Group>
          <Button variant="primary" type="submit">
            Submit
          </Button>
        </Form>
        
    
        
        </>
      )
    }
    
    export default Login