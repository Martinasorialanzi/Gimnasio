import React from 'react'
import {Button, Container, Row,Stack,Carousel,Card,Col} from 'react-bootstrap'
import '../ecommerce/ecommerce.css'
import CarruselEcommerceHome from '../ecommerce/CarruselEcommerceHome'
import NavEcommerce from '../ecommerce/NavEcommerce'
import CardsEcommerce from '../ecommerce/CardsEcommerce'
import { Productos } from '../helpers/Productos'



const EcommerceHome = () => {
  return (
    <>
    
    <NavEcommerce  />

    <CarruselEcommerceHome/>

    
 <Container className='cards-container '>
    
    <h3 className='text-center mb-4 p-2'>Productos mas vendidos</h3>
 
    <Container className="mb-4">

      <Row className="justify-content-center" >
      {Productos.filter((producto)=>producto.portada.includes("true")).map((filteredProducto)=>{
      return(
        
        <Col xs={6} sm={4} md={3} xl={3} >
        <Card key={filteredProducto.id} style={{ width: '90%' }} className='mb-2'  border="light">
          <Card.Img variant="top" src={filteredProducto.imagen} />
          <Card.Body>
            <Card.Title className='mb-2' >{filteredProducto.nombre}</Card.Title>
            <Stack direction="horizontal"  >
            <Card.Text className=''>
              ${filteredProducto.precio}
            </Card.Text>
            </Stack>
          </Card.Body>

        </Card>
        </Col>
      )
    })}
    
    <Row className="justify-content-center">
    <Button variant='dark' style={{width:'32%'}} className="m-4">Ver mas</Button> 
    </Row>
      </Row>
    </Container>


     <Stack direction="horizontal" gap={3}>
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://cdn.shopify.com/s/files/1/0065/5389/4977/files/OCT-homepage-container-02_3000x.png?v=1634247031"
          alt="First slide"
          />
        <Carousel.Caption>
        <Button className='bg-dark border-dark'>COMPRA EQUIPOS</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
      
    <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100 "
          src="https://cdn.shopify.com/s/files/1/0065/5389/4977/files/accessories_container_8a8e35be-7b10-4bce-b849-8884d9498b41_2000x.jpg?v=1642255854"
          alt="First slide"
          
          />
        <Carousel.Caption>
        <Button className='bg-dark border-dark'>COMPRA ACCESORIOS</Button>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>
    </Stack>
          </Container>
    </>
   
  )
}

export default EcommerceHome