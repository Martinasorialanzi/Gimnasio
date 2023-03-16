import React,{useState} from 'react'
import "../acercaDe/acercaDe.css"
import { aboutInfo } from './AboutInfo'
import Navegador from "../../navegador/Navegador"
import Footer from "../../footer/Footer"

const AcercaDe = () => {
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
    
     <div className="aboutHome" id="about">

      <div className="aboutHeader m-4">
        <span>quienes somos</span>
      </div>
      <div className="aboutCategoria">
        {aboutInfo.map((about) =>(
          <div className="aboutCategory">
            
            {about.photo}
            <span> {about.heading} </span>
            
            
          </div>
        ))}
      </div>

     </div>
     <Footer/>
    </>
  )
}

export default AcercaDe