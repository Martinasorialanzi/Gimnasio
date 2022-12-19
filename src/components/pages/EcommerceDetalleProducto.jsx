import { useState, React } from "react";
import {Stack,Col,Row,ToggleButton,ButtonGroup,Button} from "react-bootstrap";
import { useParams } from "react-router-dom";
import NavEcommerce from "../ecommerce/NavEcommerce";
import { productos } from "../helpers/productos";

const EcommerceDetalleProducto = () => {
  const { id } = useParams();
  const idNumber = parseInt(id);

  const [talleValue, setTalleValue] = useState("");
  console.log(talleValue);
  const [colorValue, setColorValue] = useState("");
  console.log(colorValue);

  const [cantidad, setCantidad] = useState(0);

  return (
    <>
    
      <NavEcommerce />

      {productos
        .filter((producto) => producto.id === idNumber)
        .map((detallesProducto) => {
          return (
            <>
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
                   {detallesProducto.talle.length!==0? <><h4>Talle</h4>

                    <ButtonGroup>
                      {detallesProducto.talle.map((talle, idx) => (
                        <ToggleButton
                          key={idx}
                          id={`talle-${idx}`}
                          type="radio"
                          variant="outline-dark"
                          name="talle"
                          value={talle}
                          checked={talleValue === talle}
                          onChange={(e) => setTalleValue(e.currentTarget.value)}
                        >
                          {talle}
                        </ToggleButton>
                      ))}
                    </ButtonGroup></>
                          :(null) }
                    {detallesProducto.color.length!==0?<>
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
                          onChange={(e) => setColorValue(e.currentTarget.value)}
                        >
                          {color}
                        </ToggleButton>
                      ))}
                    </ButtonGroup>
                    </>:null}

                  

                    <h4>Cantidad</h4>
                    <Stack direction="horizontal" gap={3}>
                      <Button
                        variant="dark"
                        className=" border"
                        onClick={(e) => {
                          if (cantidad !== 0) {
                            setCantidad(cantidad - 1);
                          }
                        }}
                      >
                        -
                      </Button>
                      <div className="bg-light border">{cantidad}</div>
                      <Button
                        variant="dark"
                        className="border"
                        onClick={(e) => {
                          setCantidad(cantidad + 1);
                        }}
                      >
                        +
                      </Button>
                    </Stack>

                    <Button variant="dark" size="xs">
                      Agregar al carrito
                    </Button>
                    <h4>Descripcion</h4>
                    {detallesProducto.descripción}
                  </Stack>
                </Col>
              </Row>
             
            </>
          );
        })}
    </>
  );
};

export default EcommerceDetalleProducto;
