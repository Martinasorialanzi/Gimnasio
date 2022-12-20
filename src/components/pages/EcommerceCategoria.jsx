import {React, useState} from 'react'
import { useParams } from 'react-router-dom'
import NavEcommerce from '../ecommerce/NavEcommerce'
import { productos } from '../helpers/productos'
import CardsEcommerce from '../ecommerce/CardsEcommerce'
import { Row, Container, Col } from 'react-bootstrap'
import {FiltrosColor,FiltrosPrecio,FiltrosTalle} from '../ecommerce/FiltrosEcommerce'

const EcommerceCategoria = () => {

  const {categoria}=useParams()
  const cat=categoria

  const [talle, setTalle] = useState("all")
  console.log(talle)
  const [color, setColor] = useState("all")
  console.log(color)
  const [precio, setPrecio] = useState("all")
  const precioNum=parseInt(precio)
  console.log(precioNum)
  
  
  return (
    <>
    <NavEcommerce/>
    <Row>
      <Col sm={1} className="">
      <FiltrosTalle talle={talle} setTalle={setTalle}/>
      <FiltrosPrecio precio={precio} setPrecio={setPrecio} />
      <FiltrosColor color={color} setColor={setColor}/>
        </Col>
    <Col className="p-0 m-0">
    <Container className="">
    <Row className="justify-content-center">
      <>
      {productos.filter((producto)=>
      
      producto.categoria.includes(cat) 
      &&
      (talle==="all"? producto.categoria.includes(cat):
      producto.talle.includes(talle) )
      && 
      (color==="all"? producto.categoria.includes(cat):
      producto.color.includes(color)
      )
      &&
      (precio==="all"? producto.categoria.includes(cat):
      precioNum<6000?
      producto.precio>precioNum &&producto.precio<=(precioNum+1500):
      producto.precio>6000
      )
      ).map((producto)=>{
      return(     
        <CardsEcommerce producto={producto} key={producto.id}/>
        )
    })}
      </>
   
    </Row>
    </Container>
    </Col>
    </Row>
        </>
  )
}

export default EcommerceCategoria