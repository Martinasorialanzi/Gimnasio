import { React, useState, useEffect } from "react";
import {
  Stack,
  Col,
  Row,
  ToggleButton,
  ButtonGroup,
  Button,
} from "react-bootstrap";
import { useParams } from "react-router-dom";

import { GetProducts } from "../../api/GetProducts";
import "../ecommerce/detallesProductos.css";
import Navegador from "../navegador/Navegador";
import Footer from "../footer/Footer";
import Swal from "sweetalert2";

const EcommerceDetalleProducto = () => {
  const { _id } = useParams();

  const [talleValue, setTalleValue] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [contador, setContador] = useState(1);
  const [cantidad, setCantidad] = useState(0);
  const [total, setTotal] = useState(0);

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

  useEffect(() => {
    localStorage.setItem("productos carrito", JSON.stringify(allProducts));
  }, [allProducts]);

  const handleCompra = (detallesProducto) => {
    let timerInterval
    Swal.fire({
      title: 'Producto agregado al carrito',
      timer: 700,
      timerProgressBar: true,
      didOpen: () => {
        Swal.showLoading()
        const b = Swal.getHtmlContainer().querySelector('b')
        timerInterval = setInterval(() => {
          b.textContent = Swal.getTimerLeft()
        }, 140)
      },
      willClose: () => {
        clearInterval(timerInterval)
      }
    })

    if (
      allProducts.find(
        (item) =>
          item.detalles._id === detallesProducto._id &&
          item.talle === talleValue &&
          item.color === colorValue
      )
    ) {
      const products = allProducts.map((item) =>
        item.detalles._id === detallesProducto._id &&
        item.talle === talleValue &&
        item.color === colorValue
          ? {
              ...item,
              cantidad: item.cantidad + contador,
              total: (item.cantidad + contador) * item.detalles.precio,
            }
          : item
      );
      setTotal(total + detallesProducto.precio * cantidad);
      setCantidad(cantidad + contador);
      return setAllProducts([...products]);
    }
    setAllProducts([
      ...allProducts,
      {
        detalles: detallesProducto,
        talle: talleValue,
        color: colorValue,
        cantidad: contador,
        total: detallesProducto.precio * contador,
      },
    ]);

  };

  return (
    <>
    <div className="padreDetalles">
      <Navegador allProducts={allProducts} setAllProducts={setAllProducts}/>
      {productos
        .filter((producto) => producto._id === _id)
        .map((detallesProducto) => {
          return (
            <div className="colDetalle">
              <Row key={detallesProducto._id} className="m-4 ">
                <Col xs={12} sm={12} md={6}>
                  <div className="imgDetalle">
                    <img
                      src={detallesProducto.imagen}
                      alt=""
                      width="60%"
                      height="70%"
                    />
                  </div>
                </Col>
                <Col className="">
                  <Stack direction="vertical" gap={4}>
                    <h1>{detallesProducto.nombre}</h1>
                    <h5>${detallesProducto.precio}</h5>

                    {detallesProducto.talle.length > 1 ? (
                      <>
                        <h4>Talle</h4>

                        <ButtonGroup>
                          {detallesProducto.talle.map((talle, index) => (
                            <ToggleButton
                              key={index}
                              id={`talle-${index}`}
                              type="radio"
                              variant="outline-dark"
                              name="talle"
                              value={talle}
                              checked={talleValue === talle}
                              onChange={(e) =>
                                setTalleValue(e.currentTarget.value)
                              }
                            >
                              {talle}
                            </ToggleButton>
                          ))}
                        </ButtonGroup>
                      </>
                    ) : detallesProducto.talle.length === 1 ? (
                      <>
                        <h4>Talle</h4>

                        <ButtonGroup>
                          {detallesProducto.talle[0]
                            .split(",")
                            .map((talle, index) => (
                              <ToggleButton
                                key={index}
                                id={`talle-${index}`}
                                type="radio"
                                variant="outline-dark"
                                name="talle"
                                value={talle}
                                checked={talleValue === talle}
                                onChange={(e) =>
                                  setTalleValue(e.currentTarget.value)
                                }
                              >
                                {talle}
                              </ToggleButton>
                            ))}
                        </ButtonGroup>
                      </>
                    ) : null}
                    {detallesProducto.color.length > 1 ? (
                      <>
                        <h4>Color</h4>
                        <ButtonGroup>
                          {detallesProducto.color.map((color, idx) => (
                            <ToggleButton
                              key={idx}
                              id={`color-${idx}`}
                              type="radio"
                              variant="outline-dark"
                              name="color"
                              value={color}
                              checked={colorValue === color}
                              onChange={(e) =>
                                setColorValue(e.currentTarget.value)
                              }
                            >
                              {color}
                            </ToggleButton>
                          ))}
                        </ButtonGroup>
                      </>
                    ) : detallesProducto.color.length === 1 ? (
                      <>
                        <h4>Color</h4>
                        <ButtonGroup>
                          {detallesProducto.color[0]
                            .split(",")
                            .map((color, idx) => (
                              <ToggleButton
                                key={idx}
                                id={`color-${idx}`}
                                type="radio"
                                variant="outline-dark"
                                name="color"
                                value={color}
                                checked={colorValue === color}
                                onChange={(e) =>
                                  setColorValue(e.currentTarget.value)
                                }
                              >
                                {color}
                              </ToggleButton>
                            ))}
                        </ButtonGroup>
                      </>
                    ) : null}

                    <h4>Cantidad</h4>
                    <Stack direction="horizontal" gap={3}>
                      <Button
                        variant="dark"
                        className=" border"
                        onClick={(e) => {
                          if (contador !== 1) {
                            setContador(contador - 1);
                          }
                        }}
                      >
                        -
                      </Button>
                      <div className="bg-light border">{contador}</div>
                      <Button
                        variant="dark"
                        className="border"
                        onClick={(e) => {
                          setContador(contador + 1);
                        }}
                      >
                        +
                      </Button>
                    </Stack>
                    {detallesProducto.stock > 0 ? (
                      (detallesProducto.color.length !== 0 &&
                        colorValue.length === 0) ||
                      (detallesProducto.talle.length > 0 &&
                        talleValue.length === 0) ? (
                        <Button
                          variant="dark"
                          size="xs"
                          onClick={() => handleCompra(detallesProducto)}
                          disabled
                        >
                          Agregar al carrito
                        </Button>
                      ) : (
                        <Button
                          variant="dark"
                          size="xs"
                          onClick={() => handleCompra(detallesProducto)}
                        >
                          Agregar al carrito
                        </Button>
                      )
                    ) : (
                      <Button variant="dark" size="xs" disabled>
                        Sin stock
                      </Button>
                    )}

                    <h4>Descripcion</h4>
                    {detallesProducto.descripcion}
                  </Stack>
                </Col>
              </Row>
            </div>
          );
        })}
      </div>
      <Footer />
    </>

  );
};

export default EcommerceDetalleProducto;
