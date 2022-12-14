import React from 'react'
import { Nav,Card,Button, Container, Row, Col,Pagination,Stack } from 'react-bootstrap'
import CarritoCompras from '../carritoCompras/CarritoCompras'
import { Productos } from '../helpers/Productos'

const EcommerceTodo = () => {
  return (
    <>
    <h1>Ecommerce</h1>
    <CarritoCompras/>
    
    <Nav justify variant="tabs" defaultActiveKey="/ecommerce">
    <Nav.Item>
        <Nav.Link href="/ecommerce-all">Todo</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/ecommerce-indumentaria">Indumentaria</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/ecommerce-accesorios">Accesorios</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/home/suplementos">Sumplementos</Nav.Link>
      </Nav.Item>
      <Nav.Item>
        <Nav.Link href="/ecommerce-equipos">Equipos</Nav.Link>
      </Nav.Item>
      
    </Nav>
{/* Carrusel */}


{/*empieza las cards */}
<Container>
      <Row>
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
    </>
   
  )
}

export default EcommerceTodo