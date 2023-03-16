import React,{useState} from "react";
import Footer from "../../footer/Footer";
import Navegador from "../../navegador/Navegador";

import "../preguntasFrecuentes/preguntasFrecuentes.css";

const PreguntasFrecuentes = () => {
  const [allProducts, setAllProducts] = useState(() => {
    try {
      const productosEnLocalStorage = localStorage.getItem("productos carrito");
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });
  return (
    <>
    <Navegador allProducts={allProducts} setAllProducts={setAllProducts}/>
      <div className="preguntasFrecuentes" id="clima">
        <div className="preguntas">
          <h1 className="m-5">PREGUNTAS FRECUENTES</h1>
          <h2 className="m-4">Todo lo que necesitas saber</h2>
          <h3 className="m-4">¿QÚE ES GYM?</h3>
          <h4 className="m-3">
            Es un espacio donde entrenar, hacer amigos, divertirse, mejorar tus
            hábitos y buscar performar con equilibrio en todas las áreas de tu
            vida.
          </h4>

          <h3 className="m-4">¿SE PUEDE PROBAR UNA CLASE?</h3>
          <h4 className="m-3">
            ¡Si, tenes una clase de prueba gratuita para poder vivir la
            experiencia cuando estes listo!
          </h4>
          <h3 className="m-4">¿TIENEN MÁQUINAS?</h3>
          <h4 className="m-3">
            Contamos con amplia variedad de máquinas aeróbicas como remadoras,
            bicicletas, corredoras, etc.
          </h4>
        </div>
        
      </div>
      <Footer/>
    </>
  );
};

export default PreguntasFrecuentes;
