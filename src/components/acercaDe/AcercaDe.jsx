import React from 'react'
import "../acercaDe/acercaDe.css"
import { aboutInfo } from './AboutInfo'
import Navegador from "../navegador/Navegador"
import Footer from "../footer/Footer"

const AcercaDe = () => {
  return (

    <>
    <Navegador/> 
     <div className="aboutHome" id="about">

      <div className="aboutHeader">
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