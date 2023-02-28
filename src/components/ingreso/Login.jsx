import React, {useState} from 'react'
import Button from 'react-bootstrap/Button';
import Form from 'react-bootstrap/Form';
import {funcionLogin} from '../../api/Login.api'
import Swal from 'sweetalert2'
import {response} from '../../api/Login.api'

const Login = () => {

    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const regexEmail = /^(\w+[/./-]?){1,}@[a-z]+[/.]\w{2,}$/;
  const regexPassword = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[$@$!%*?&])([A-Za-z\d$@$!%*?&]|[^ ]){8,20}$/;

    
        const handleSubmit = (e) =>{
            e.preventDefault();

            try{
             

                const login = {
                  email,
                  password,
                }
                funcionLogin(login);
        
      
          }
    
          catch (error){
            console.log(error)
          }
    
    

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
          
          <Button variant="dark" type="submit">
            Submit
          </Button>
        </Form>
        
    
        
        </>
      )
    }
    
    export default Login