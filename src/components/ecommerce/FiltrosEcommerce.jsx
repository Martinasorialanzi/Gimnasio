import React from 'react'
import { Row,Form, Container } from 'react-bootstrap'
import { tallesProductos, coloresProductos } from '../helpers/productos'

export const FiltrosPrecio = () => {
  return (
    <>
  <Container className='m-1'>

    <h5>Precio</h5>

    <Form>
     
        <Row  className="m-3">
            
        <Form.Check
            inline
            label="All"
            name="group1"
            type="radio"
            id={`inline-radio`}
            defaultChecked
          />  
          <Form.Check
            inline
            label="$1000-$2000"
            name="group1"
            type="radio"
            id={`inline-radio`}
          />
          <Form.Check
            inline
            label="$2000-$3500"
            name="group1"
            type="radio"
            id={`inline-radio`}
          />
          <Form.Check
            inline
            label="$3500-$5000"
            name="group1"
            type="radio"
            id={`inline-radio`}
          />
          <Form.Check
            inline
            label="$5000+"
            name="group1"
            type="radio"
            id={`inline-radio`}
          />
          
        </Row>
      
    </Form>
    </Container>
        </>
        )}
        
export const FiltrosTalle = () => {
    return (
      <>
  <Container className='m-1'>

    <h5>Talle</h5>

    <Form>
     
        <Row  className="m-3">
        <Form.Check
            inline
            label="all"
            name="group1"
            type="radio"
            id={`inline-radio`}
            defaultChecked
          />
     {tallesProductos.map((talle)=>{
        return (
            <Form.Check
            inline
            label={talle}
            name="group1"
            type="radio"
            id={`inline-radio`}
          />   
        )
     })}       
        </Row>
      
    </Form>
    </Container>
    </>
    )}

export const FiltrosColor = () => {
 return(
    <>
  <Container className='m-1'>
    <h5>Color</h5>

<Form>
 
    <Row  className="m-3">
    <Form.Check
        inline
        label="all"
        name="group1"
        type="radio"
        id={`inline-radio`}
        defaultChecked
      />
 {coloresProductos.map((color)=>{
    return (
        <Form.Check
        inline
        label={color}
        name="group1"
        type="radio"
        id={`inline-radio`}
      />   
    )
 })}       
    </Row>
  
</Form>
</Container>
    </>
  )
}

