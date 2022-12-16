import React from 'react'
import { Nav,Card,Button, Container, Row, Col,Pagination,Stack } from 'react-bootstrap'
import CardsEcommerce from '../ecommerce/CardsEcommerce'
import NavEcommerce from '../ecommerce/NavEcommerce'
import { productos } from '../helpers/productos'

const EcommerceTodo = () => {
  return (
    <>
<NavEcommerce/>


<Container className='mt-4'>
      <Row className="justify-content-center">
{/* {productos.map((producto)=>{
  return(

    <Col xs={6} sm={4} md={3} xl={3} >
    <Card key={producto.id} style={{ width: '90%' }} className='mb-2'  border="light">
      <Card.Img variant="top" src={producto.imagen} />
      <Card.Body>
        <Card.Title className='mb-2' >{producto.nombre}</Card.Title>
        <Stack direction="horizontal"  >
        <Card.Text className=''>
          ${producto.precio}
        </Card.Text>
        </Stack>
      </Card.Body>

    </Card>
    </Col>
  )
})} */}

  </Row>
  </Container>
   
  <Pagination className='justify-content-center'>
      <Pagination.First />
      <Pagination.Prev />
      <Pagination.Item active>{1}</Pagination.Item>
      <Pagination.Item>{2}</Pagination.Item>
      <Pagination.Item>{3}</Pagination.Item>
      <Pagination.Item>{4}</Pagination.Item>
    
      <Pagination.Next />
      <Pagination.Last />
    </Pagination>   


    <Container className='mt-4'>
      <Row className="justify-content-center">
{productos.map((producto)=>{
  return(
    <CardsEcommerce producto={producto}/>
  )
})}

  </Row>
  </Container>
    
    </>
   
  )
}

export default EcommerceTodo