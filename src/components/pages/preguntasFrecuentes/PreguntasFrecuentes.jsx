import React from "react";
import Footer from "../../footer/Footer";
import Navegador from "../../navegador/Navegador";

import "../preguntasFrecuentes/preguntasFrecuentes.css";

const preguntasFrecuentes = () => {
  return (
    <>
    <Navegador/>
      <div className="preguntasFrecuentes" id="clima">
        <div className="preguntas">
          <h1>PREGUNTAS FRECUENTES</h1>
          <h2>Todo lo que necesitas saber</h2>
          <h3>¿QÚE ES GYM?</h3>
          <h4>
            Es un espacio donde entrenar, hacer amigos, divertirse, mejorar tus
            hábitos y buscar performar con equilibrio en todas las áreas de tu
            vida.
          </h4>

          <h3>¿SE PUEDE PROBAR UNA CLASE?</h3>
          <h4>
            ¡Si, tenes una clase de prueba gratuita para poder vivir la
            experiencia cuando estes listo!
          </h4>
          <h3>¿TIENEN MÁQUINAS?</h3>
          <h4>
            Contamos con amplia variedad de máquinas aeróbicas como remadoras,
            bicicletas, corredoras, etc.
          </h4>
        </div>
        
      </div>
      <Footer/>
    </>
  );
};

export default preguntasFrecuentes;
