import React from "react"
import Carousel from 'react-bootstrap/Carousel';
import Tab from 'react-bootstrap/Tab';
import Tabs from 'react-bootstrap/Tabs';



const Libre = () => {
    return (
        <>

        <h1>LIBRE</h1>

        <Carousel>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701968232.jpg"
          alt="First slide"
        />
        <Carousel.Caption>
          <h3>ENTRENA EN NUESTRO GYM</h3>
          <p>Tenemos un establecimiento completisimo con los mejores trainers</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701968232.jpg"
          alt="Second slide"
        />

        <Carousel.Caption>
        <h3>ENTRENA EN NUESTRO GYM</h3>
          <p>Tenemos un establecimiento completisimo con los mejores trainers</p>
        </Carousel.Caption>
      </Carousel.Item>
      <Carousel.Item>
        <img
          className="d-block w-100"
          src="https://wallpaper-mania.com/wp-content/uploads/2018/09/High_resolution_wallpaper_background_ID_77701968232.jpg"
          alt="Third slide"
        />

        <Carousel.Caption>
        <h3>ENTRENA EN NUESTRO GYM</h3>
          <p>Tenemos un establecimiento completisimo con los mejores trainers</p>
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
      ¿De qué se trata? Es un movimiento funcional que se hace con una sobrecarga, como mancuernas, barras, discos, pesas rusas, pelotas medicinales y bandas de resistencia. 
        
      </Tab>
      <Tab eventKey="profile" title="rutina">
      Para crear tu propio entrenamiento necesitas tener en cuenta:

Cuántos días (2, 3, 4, 5, 6 días) y cuánto tiempo vas a entrenar a la semana.
Qué nivel de condición física y experiencia tienes.
Cómo quieres entrenar, es decir, qué división quieres hacer de los entrenamientos:
Entrenamientos Fullbody.
Entrenamientos Torso – Pierna.
Entrenamientos Push – Pull (Empuje – Tirón).
Entrenamientos divididos tipo Weider.
Entrenamientos Push – Pull – Leg.
El volumen de entrenamiento y la intensidad del entrenamiento.
La frecuencia de entrenamiento, cuántas veces vas a entrenar un grupo muscular a lo largo de la semana.
El rango de repeticiones con el que vas a entrenar.
La selección y orden de los ejercicios por cada grupo muscular.
      </Tab>
      <Tab eventKey="longer-tab" title="beneficios">
      Ir al gimnasio te ayuda a quemar muchas calorías
En otras palabras, el ejercicio regular te ayuda a prevenir el exceso de peso, tener un vientre más plano o incluso puede ayudarte a mantener la pérdida de peso. Considera el hecho de que cuando realizas una actividad física, quemas calorías.
      </Tab>
      <Tab eventKey="contact" title="Contact" disabled>
      </Tab>
    </Tabs>


        </>
    )
}

export default Libre