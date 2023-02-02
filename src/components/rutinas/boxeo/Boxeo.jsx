import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const Boxeo = () => {
    return (
        <>
        <h1>BOXEO</h1>


        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.tagoya.com/blog/wp-content/uploads/2022/10/Tipos-de-boxeo.jpg"
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
          src="https://www.tagoya.com/blog/wp-content/uploads/2022/10/Tipos-de-boxeo.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>ENTRENA CON NOSOTROS</h3>
          <p>Tenemos los mejores entrenadores del NOA</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.tagoya.com/blog/wp-content/uploads/2022/10/Tipos-de-boxeo.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>ENTRENA CON NOSOTROS</h3>
          <p>Tenemos los mejores entrenadores del NOA</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="home" title="acerca">
      El boxeo (del inglés boxing), también llamado a veces boxeo inglés, boxeo irlandés o pugilismo, y comúnmente conocido como box, es un deporte de contacto en el que dos contrincantes luchan utilizando únicamente sus puños con guantes, golpeando a su adversario de la cintura hacia arriba, dentro de un cuadrilátero especialmente diseñado para tal fin; la pelea se lleva a cabo en breves secuencias de lucha denominadas asaltos y de acuerdo a un preciso reglamento, el cual regula categorías de pesos y duración del encuentro, entre otros aspectos.
        
      </Tab>
      <Tab eventKey="profile" title="rutina">
      Correr y hacer sentadillas: 30 a 60 minutos.
Calentamiento: 30 minutos.
Ejercicios con el saco de boxeo: 30 a 60 minutos.
Ejercicios técnicos: 30 minutos.
Sparring: 30 minutos.
Fortalecimiento muscular: 60 minutos.
Recuperación y abdominales, estiramientos: 30 minutos.
      </Tab>
      <Tab eventKey="longer-tab" title="beneficios">
      Aumenta la agilidad, los reflejos y la elasticidad. ...
Combate la ansiedad y el estrés. ...
Tonifica todo el cuerpo. ...
Quema muchas calorías. ...
Favorece el equilibrio mental.
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
      </Tab>
    </Tabs>



        </>
    )
}

export default Boxeo