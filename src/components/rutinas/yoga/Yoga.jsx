import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';


const Yoga = () => {
    return (
        <>

        <h1>YOGA</h1>

        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.vivirconcorazon.com/wp-content/uploads/2022/09/anupam-mahapatra-Vz0RbclzG_w-unsplash-1.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>VENI A NUESTRAS SESIONES</h3>
          <p>Para mejorar a nivel general tu estado fisico</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.vivirconcorazon.com/wp-content/uploads/2022/09/anupam-mahapatra-Vz0RbclzG_w-unsplash-1.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>VENI A NUESTRAS SESIONES</h3>
          <p>Para mejorar a nivel general tu estado fisico</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://www.vivirconcorazon.com/wp-content/uploads/2022/09/anupam-mahapatra-Vz0RbclzG_w-unsplash-1.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>VENI A NUESTRAS SESIONES</h3>
          <p>Para mejorar a nivel general tu estado fisico</p>
        </Carousel.Caption>
      </Carousel.Item>
    </Carousel>


    <Tabs
      defaultActiveKey="profile"
      id="fill-tab-example"
      className="mb-3"
      fill
    >
      <Tab eventKey="Acerca" title="Acerca">
      El yoga es un grupo de prácticas o disciplinas físicas, mentales y espirituales que se originaron en la antigua India y tienen como objetivo controlar y aquietar la mente, reconociendo una conciencia-testigo desapegada que no ha sido tocada por la mente y el sufrimiento mundano.
        
      </Tab>
      <Tab eventKey="rutina" title="rutina">
      La mayoría de las clases de yoga dura de 45 a 90 minutos. Todos los estilos de yoga incluyen tres componentes básicos:

Respiración. Concentrarse en su respiración es una parte importante del yoga. Su maestro puede ofrecerle instrucciones sobre ejercicios de respiración durante la clase.
Posturas. Las posturas, o posiciones, de yoga son una serie de movimientos que ayudan a aumentar la fortaleza, la flexibilidad y el equilibrio. Estas varían en dificultad desde acostarse boca arriba en el suelo a complicadas posturas de equilibrio.
Meditación. Las clases de yoga usualmente terminan con un período breve de meditación. Esto tranquiliza la mente y lo ayuda a relajarse.

      </Tab>
      <Tab eventKey="longer-tab" title="beneficios">
      El yoga puede mejorar el nivel general de su estado físico y mejorar su postura y su flexibilidad.
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
      </Tab>
    </Tabs>


        </>
    )
}

export default Yoga