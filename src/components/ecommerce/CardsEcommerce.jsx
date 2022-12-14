import React from 'react'
import {Card,Button, Col,Stack,Row} from 'react-bootstrap'
import { Productos } from '../helpers/Productos'



const CardsEcommerce = () => {

  return (
      <Row className="justify-content-center" >
    {Productos.map((producto)=>{
      return(
        
        <Col xs={6} sm={6} md={3} xl={3} >
        <Card key={producto.id} style={{ width: '90%' }} className='mb-2'  border="light">
          <Card.Img variant="top" src={producto.imagen} />
          <Card.Body>
            <Card.Title className='mb-4' >{producto.nombre}</Card.Title>
            <Stack direction="horizontal"  >
            <Card.Text className=''>
              ${producto.precio}
            </Card.Text>
            <Button className="ms-auto"variant="dark" style={{ width: '' }}>Comprar</Button>
            </Stack>
          </Card.Body>

        </Card>
        </Col>
      )
    })}
    
      </Row>
    )
}

export default CardsEcommerce