import React, { Fragment } from 'react'
import "./Yoga.css"
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Card from 'react-bootstrap/Card';
import CardGroup from 'react-bootstrap/CardGroup';
import Footer from "../footer/Footer";
import NavegadorAdmin from '../navegador/NavegadorAdmin';
// import Navegador from '../navegador/Navegador';

const Yoga = () => {
return (
<> 
{/* <Navegador/> */}

        <NavegadorAdmin/>

<div className='fondobox'>

   

        <Carousel>

        <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://besthqwallpapers.com/Uploads/19-8-2017/18753/yoga-yoga-exercises-yoga-girls-gym-meditation.jpg"
        alt="First slide"
        />
        <Carousel.Caption>
        <h3>VENI A NUESTRAS CLASES DE YOGA</h3>
        <p>Tenemos a las mejores profes</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://images8.alphacoders.com/523/thumb-1920-523923.jpg"
        alt="Second slide"
        />
      
        <Carousel.Caption>
        <h3>VENI A NUESTRAS CLASES DE YOGA</h3>
        <p>Tenemos a las mejores profes</p>
        </Carousel.Caption>
        </Carousel.Item>

        </Carousel>

        
        <h2 className='boxeoletra'>CLASES DE YOGA</h2>
        <h5 className='boxeoletra'>TE AYUDAMOS A DESCONTRACTURAR TU VIDA</h5>



        <Accordion className='mt-5 p-3'>

        <Accordion.Item eventKey="0" className='item'>
        <Accordion.Header>Acerca del Yoga</Accordion.Header>
        <Accordion.Body>
        El yoga es una disciplina tradicional espiritual, física y mental originada en la India. El yoga es una de las seis dárshanas ortodoxas del hinduismo. Enfatiza la meditación y la liberación, siendo su texto principal el Yoga sutra.
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1" className='item'>
        <Accordion.Header>Beneficios</Accordion.Header>
        <Accordion.Body>
        <ul>
        <li>Reducir su presión arterial y su frecuencia cardíaca</li>
        <li>Reducir el estrés</li>
        <li>Mejorar su coordinación</li>
        <li>Ayudarle a dormir mejor</li>
        <li>Ayudar a la digestión</li>
        <li>Ayudarle a relajarse</li>
        </ul>
        </Accordion.Body>
        </Accordion.Item>

        </Accordion>



        <h4 className='horariosletra'>HORARIOS</h4>


        <Table striped bordered hover variant="dark">

        <thead>
        <tr>
        <th>Horarios</th>
        <th>Lunes - Martes</th>
        <th>Miercoles - Jueves</th>
        <th>Viernes - Sabado</th>
        </tr>
        </thead>
        <tbody>
        <tr>
        <td>BOXEO</td>
        <td>14:00 a 16:00</td>
        <td>16:00 a 18:00</td>
        <td>18:00 a 20:00</td>
        </tr>
        <tr>
        <td>YOGA</td>
        <td>09:00 a 11:00</td>
        <td>13:00 a 15:00</td>
        <td>16:00 a 18:00</td>
        </tr>
        <tr>
        <td>LIBRE</td>
        <td colSpan={2}>08:00 a 22:00</td>
        <td>10:00 a 21:00</td>
        </tr>
        </tbody>

        </Table>

        <h4 className='horariosletra'>NUESTROS PLANES</h4>

        <CardGroup className='grupocards'>
        <Card className='cardplanes'>
        <Card.Img variant="top" src="https://media.gq.com.mx/photos/5be9e88e802158671c66f886/1:1/w_1200,h_1200,c_limit/box_9903.jpg" />
        <Card.Body>
        <Card.Title className='letratarjetas' style={{color: "black"}}>BOXEO</Card.Title>
        <Card.Text className='letratarjetas'>
            Tenemos los mejores entrenadores, el mejor ambiente y los mejores precios.
            No esperes más e inscribite para entrenar con nosotros.
        </Card.Text>
        </Card.Body>
        </Card>

        <Card className='cardplanes'>
        <Card.Img variant="top" src="https://www.cuerpomente.com/medio/2020/07/08/1144083_1ee10942_1200x1200.jpg" />
        <Card.Body>
        <Card.Title className='letratarjetas' style={{color: "black"}}>YOGA</Card.Title>
        <Card.Text className='letratarjetas'>
            Si descontracturar tu vida es lo que estas buscando, inscribite a nuestras clases de yoga, tenemos a la mejor gurú. {' '}
        </Card.Text>
        </Card.Body>
        </Card>

        <Card className='cardplanes'>
        <Card.Img variant="top" src="https://hips.hearstapps.com/hmg-prod.s3.amazonaws.com/images/mancuernas-1559227736.jpg?resize=480:*" />
        <Card.Body>
        <Card.Title className='letratarjetas' style={{color: "black"}}>GIMNASIO</Card.Title>
        <Card.Text className='letratarjetas'>
            Tenemos las mejores instalaciones, las mejores maquinas y los mejores trainers. Inscribite y logra tus objetivos con nosotros.
        </Card.Text>
        </Card.Body>
        </Card>
        </CardGroup>
        


</div>

        <Footer/>
</>


  )
}

export default Yoga