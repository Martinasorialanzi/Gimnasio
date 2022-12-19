import {  React } from 'react' 
import { Row,Form, Container } from 'react-bootstrap'
import { tallesProductos, coloresProductos, productos } from '../helpers/productos'


export const FiltrosPrecio = ({precio,setPrecio}) => {
  
  return (
    <>
  <Container className='m-1'>

    <h5>Precio</h5>

    <Form>
     
        <Row  className="m-3">

        <Form.Check
            inline
            label="all"
            name="group1"
            type="radio"
            id={`inline-radio`}
            value={1000000000}
            onChange={(e) => setPrecio(e.currentTarget.value)}
            defaultChecked
          />    
        <Form.Check
            inline
            label="$0-$1000"
            name="group1"
            type="radio"
            id={`inline-radio`}
            value={0}
            onChange={(e) => setPrecio(e.currentTarget.value)}
          />  
          <Form.Check
            inline
            label="$1000-$2000"
            name="group1"
            type="radio"
            id={`inline-radio`}
            value={1500}
            onChange={(e) => setPrecio(e.currentTarget.value)}
          />
          <Form.Check
            inline
            label="$2000-$3500"
            name="group1"
            type="radio"
            id={`inline-radio`}
            value={3000}
            onChange={(e) => setPrecio(e.currentTarget.value)}
          />
          <Form.Check
            inline
            label="$3500-$5000"
            name="group1"
            type="radio"
            id={`inline-radio`}
            value={4500}
            onChange={(e) => setPrecio(e.currentTarget.value)}
          />
          <Form.Check
            inline
            label="$5000+"
            name="group1"
            type="radio"
            id={`inline-radio`}
            value={6500}
            onChange={(e) => setPrecio(e.currentTarget.value)}
          />
          
        </Row>
      
    </Form>
    </Container>
        </>
        )}
        
export const FiltrosTalle = ({talle,setTalle}) => {
 


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
            value="all"
            onChange={(e) => setTalle(e.currentTarget.value)}
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
            value={talle}
            onChange={(e) => setTalle(e.currentTarget.value)}
            key={talle}
          />   
        )
     })}       
        </Row>
      
    </Form>
    </Container>
    </>
    )}

export const FiltrosColor = ({color,setColor}) => {
  
  
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
        value="all"
        onChange={(e) => setColor(e.currentTarget.value)}
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
        value={color}
        onChange={(e) => setColor(e.currentTarget.value)}
        key={color}
      />   
    )
 })}       
    </Row>
  
</Form>
</Container>
    </>
  )
}

