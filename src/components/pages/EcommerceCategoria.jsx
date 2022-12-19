import {React} from 'react'
import { useParams } from 'react-router-dom'
import NavEcommerce from '../ecommerce/NavEcommerce'
import { productos } from '../helpers/productos'
import CardsEcommerce from '../ecommerce/CardsEcommerce'
import { Row, Container, Col } from 'react-bootstrap'
import {FiltrosColor,FiltrosPrecio,FiltrosTalle} from '../ecommerce/FiltrosEcommerce'

const EcommerceCategoria = () => {

  const {categoria}=useParams()
  const cat=categoria
  
  
  return (
    <>
    <NavEcommerce/>
    <Row>
      <Col sm={1} className="">
      <FiltrosTalle/>
      <FiltrosPrecio/>
      <FiltrosColor/>
        </Col>
    <Col className="mb-4">
    <Container className="mb-4">
    <Row className="justify-content-center">
      {cat==="all"? 
      <>
      {productos.map((producto)=>{
        return(
          <CardsEcommerce producto={producto} key={producto.id}/>
        )
      })}
      </>:<>
      {productos.filter((producto)=>producto.categoria===cat).map((producto)=>{
      return(     
        <CardsEcommerce producto={producto} key={producto.id}/>
        )
    })}
      </>}
   
    </Row>
    </Container>
    </Col>
    </Row>
        </>
  )
}

export default EcommerceCategoria