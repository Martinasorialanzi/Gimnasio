import  {React,useState} from "react";
import Navegador from "../navegador/Navegador"
import Carrousel from "../carrousel/Carrousel";
import EspacioEntrenadores from "../espaciosHome/EspacioEntrenadores";
import UsoApi from "../espaciosHome/UsoApi";
import Footer from "../footer/Footer"


const Home = () => {
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
      <Carrousel/>
      <UsoApi/>
      <EspacioEntrenadores />
      <Footer/>
      
      
    </>
  );
};

export default Home;