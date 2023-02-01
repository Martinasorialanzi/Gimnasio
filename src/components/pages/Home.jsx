import React from "react";
import Navegador from "../navegador/Navegador"
import Carrousel from "../carrousel/Carrousel";
import EspacioEntrenadores from "../espaciosHome/EspacioEntrenadores";
import UsoApi from "../espaciosHome/UsoApi";
import Footer from "../footer/Footer"


const home = () => {
  return (
    <>
      <Navegador/>
      <Carrousel/>
      <UsoApi/>
      <EspacioEntrenadores />
      <Footer/>
      
      
    </>
  );
};

export default home;