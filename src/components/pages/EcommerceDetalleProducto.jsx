import { React, useState, useEffect } from "react";
import {Stack,Col,Row,ToggleButton,ButtonGroup,Button,} from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavEcommerce from "../ecommerce/NavEcommerce";
import { productos } from "../helpers/productos";

const EcommerceDetalleProducto = () => {
  const { id } = useParams();
  const idNumber = parseInt(id);

  const [talleValue, setTalleValue] = useState("");
  const [colorValue, setColorValue] = useState("");
  const [contador, setContador] = useState(1);
  const [cantidad, setCantidad] = useState(0);
  const [total, setTotal] = useState(0);

  const [allProducts, setAllProducts] = useState(()=>{
    try{
      const productosEnLocalStorage=localStorage.getItem("productos carrito");
      return productosEnLocalStorage? JSON.parse(productosEnLocalStorage):[];
    } catch (error){
      return [];
    }
  });


    useEffect(() => {
      
      localStorage.setItem("productos carrito", JSON.stringify(allProducts));
      }, [allProducts])
    

  const handleCompra = (detallesProducto) => {
    if (
      allProducts.find(
        (item) =>
          item.detalles.id === detallesProducto.id &&
          item.talle === talleValue &&
          item.color === colorValue
      )
    ) {
      const products = allProducts.map((item) =>
        item.detalles.id === detallesProducto.id &&
        item.talle === talleValue &&
        item.color === colorValue
          ? { ...item, cantidad: item.cantidad + contador, total: (item.cantidad + contador)*item.detalles.precio }
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
        total:detallesProducto.precio*contador
      },
    ]);
  };

  return (
    <>
      <NavEcommerce allProducts={allProducts} setAllProducts={setAllProducts} />

      {productos
        .filter((producto) => producto.id === idNumber)
        .map((detallesProducto) => {
          return (
            <Row key={detallesProducto.id} className="m-4 align-items-center">
              <Col xs={12} sm={12} md={6} className="">
                <img
                  src={detallesProducto.imagen}
                  alt=""
                  width="60%"
                  height="70%"
                  className=""
                />
              </Col>
              <Col className="">
                <Stack direction="vertical" gap={4}>
                  <h1>{detallesProducto.nombre}</h1>
                  <h5>${detallesProducto.precio}</h5>
                  {detallesProducto.talle.length !== 0 ? (
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
                  ) : null}
                  {detallesProducto.color.length !== 0 ? (
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
                    <Button
                      variant="dark"
                      size="xs"
                      onClick={() => handleCompra(detallesProducto)}
                    >
                      Agregar al carrito
                    </Button>
                  ) : (
                    <Button variant="dark" size="xs" disabled>
                      Sin stock
                    </Button>
                  )}

                  <h4>Descripcion</h4>
                  {detallesProducto.descripción}
                </Stack>
              </Col>
            </Row>
          );
        })}
    </>
  );
};

export default EcommerceDetalleProducto;
