import React from "react";
import "../espaciosHome/entrenadores.css";
import { programsData } from "../espaciosHome/ProgramData"

const EspacioEntrenadores = () => {
  return (
    <>
     <div className="programsHome" id="programs">

      <div className="programsHeader">
        <span>NUESTRO EQUIPO</span>
      </div>
      <div className="programsCategoria">
        {programsData.map((program) =>(
          <div className="category">
            {program.image}
            {program.photo}
            <span> {program.heading} </span>
            <span> {program.details} </span>
            
          </div>
        ))}
      </div>

     </div>
    </>
  );
};

export default EspacioEntrenadores;