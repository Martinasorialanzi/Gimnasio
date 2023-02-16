import React from 'react'
import "../boxeo/Boxeo.css"
import Carousel from 'react-bootstrap/Carousel';
import Accordion from 'react-bootstrap/Accordion';
import Table from 'react-bootstrap/Table';
import Footer from "../footer/Footer"
import NavegadorAdmin from '../navegador/NavegadorAdmin';

const Boxeo = () => {
  return (
<> 
<NavegadorAdmin/>

 <div className='clasedivf'>


        <Carousel>

        <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://d2y8hg1io93jyo.cloudfront.net/wp-content/uploads/Diseno-sin-titulo-2022-11-13T231856.935.jpg"
        alt="First slide"
        />
        <Carousel.Caption>
        <h3>ENTRENA CON NOSOTROS</h3>
        <p>Tenemos los mejores entrenadores del NOA</p>
        </Carousel.Caption>
        </Carousel.Item>

        <Carousel.Item>
        <img
        className="d-block w-100"
        src="https://www.sabervivirtv.com/medio/2022/05/25/los-beneficios-de-practicar-boxeo_5ded1591_1280x720.jpg"
        alt="Second slide"
        />
      
        <Carousel.Caption>
        <h3>ENTRENA CON NOSOTROS</h3>
        <p>Tenemos los mejores entrenadores del NOA</p>
        </Carousel.Caption>
        </Carousel.Item>

        </Carousel>

     
        <Accordion>

        <Accordion.Item eventKey="0">
        <Accordion.Header>Acerca del Boxeo</Accordion.Header>
        <Accordion.Body>
        El boxeo, también llamado a veces boxeo inglés, boxeo irlandés o pugilismo, y comúnmente conocido como box, es un deporte de contacto en el que dos contrincantes luchan utilizando únicamente sus puños con guantes, golpeando a su adversario de la cintura hacia arriba, dentro de un cuadrilátero especialmente diseñado para tal fin; la pelea se lleva a cabo en breves secuencias de lucha denominadas asaltos y de acuerdo a un preciso reglamento, el cual regula categorías de pesos y duración del encuentro, entre otros aspectos.
        </Accordion.Body>
        </Accordion.Item>

        <Accordion.Item eventKey="1">
        <Accordion.Header className='accordionf'>Beneficios</Accordion.Header>
        <Accordion.Body>
        <ul>
        <li>Libera tensiones y estrés</li>
        <li>Aumenta la agilidad, los reflejos y la elasticidad</li>
        <li>Combate la ansiedad y el estrés</li>
        <li>Tonifica todo el cuerpo</li>
        <li>Quema muchas calorías</li>
        <li>Favorece el equilibrio mental</li>
        </ul>
        </Accordion.Body>
        </Accordion.Item>

        </Accordion>


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

   

</div>

        <Footer/>
</>


  )
}

export default Boxeo