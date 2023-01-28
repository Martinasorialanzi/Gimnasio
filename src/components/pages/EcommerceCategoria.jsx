import { React, useState,useEffect } from "react";
import { useParams } from "react-router-dom";
import NavEcommerce from "../ecommerce/NavEcommerce";
import { GetProducts } from "../helpers/GetProducts";
import CardsEcommerce from "../ecommerce/CardsEcommerce";
import { Row, Container, Col } from "react-bootstrap";
import {
  FiltrosColor,
  FiltrosPrecio,
  FiltrosTalle,
} from "../ecommerce/FiltrosEcommerce";

const EcommerceCategoria = () => {
  const [allProducts, setAllProducts] = useState(() => {
    try {
      const productosEnLocalStorage = localStorage.getItem("productos carrito");
      return productosEnLocalStorage ? JSON.parse(productosEnLocalStorage) : [];
    } catch (error) {
      return [];
    }
  });
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await GetProducts();
      setProductos(response.products);
    };

    getProducts();
  }, []);
 
  const { categoria } = useParams();
  const cat = categoria;

  const [talle, setTalle] = useState("all");
  console.log(talle);
  const [color, setColor] = useState("all");
  console.log(color);
  const [precio, setPrecio] = useState("all");
  const precioNum = parseInt(precio);
  console.log(precioNum);

  return (
    <>
      <NavEcommerce allProducts={allProducts} setAllProducts={setAllProducts} />
      <Row>
        <Col sm={1} className="">
          <FiltrosTalle talle={talle} setTalle={setTalle} />
          <FiltrosPrecio precio={precio} setPrecio={setPrecio} />
          <FiltrosColor color={color} setColor={setColor} />
        </Col>
        <Col className="p-0 m-0">
          <Container className="">
            <Row className="justify-content-center">
              <>
                {productos
                  .filter(
                    (producto) =>
                      producto.categoria.includes(cat) &&
                      (talle.includes ("all")
                        ? producto.categoria.includes(cat)
                        : producto.talle.includes(talle)) &&
                      (color.includes("all")
                        ? producto.categoria.includes(cat)
                        : producto.color.includes(color)) &&
                      (precio.includes( "all")
                        ? producto.categoria.includes(cat)
                        : precioNum < 6000
                        ? producto.precio > precioNum &&
                          producto.precio <= precioNum + 1500
                        : producto.precio > 6000)
                  )
                  .map((producto) => {
                    return (
                      <CardsEcommerce producto={producto} key={producto.id} />
                    );
                  })}
              </>
            </Row>
          </Container>
        </Col>
      </Row>
    </>
  );
};

export default EcommerceCategoria;
