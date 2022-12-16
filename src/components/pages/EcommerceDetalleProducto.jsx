import { useState, React } from "react";
import {
  Container,
  Stack,
  Col,
  Row,
  ToggleButton,
  ButtonGroup,
  Button,
} from "react-bootstrap";
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
              <Row key={detallesProducto.id}>
                <Col xs={12} sm={6} className="m-4">
                  <img
                    src={detallesProducto.imagen}
                    alt=""
                    width="80%"
                    height="80%"
                    className="m-4"
                  />
                </Col>
                <Col className=" m-4">
                  <Row>
                    <h1>{detallesProducto.nombre}</h1>
                    <h5>${detallesProducto.precio}</h5>
                    <h4>Talle</h4>

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
                    </ButtonGroup>

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

                    <h4>Cantidad</h4>
                    <Stack direction="horizontal" gap={3}>
                      <Button
                        variant="light"
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
                        variant="light"
                        className="border"
                        onClick={(e) => {
                          setCantidad(cantidad + 1);
                        }}
                      >
                        +
                      </Button>
                    </Stack>

                    <Button variant="dark" size="lg">
                      Agregar al carrito
                    </Button>
                    <h4>Descripcion</h4>
                    {detallesProducto.descripción}
                  </Row>
                </Col>
              </Row>
              {/* 
<ToggleButtonExample/> */}
            </>
          );
        })}
    </>
  );
};

export default EcommerceDetalleProducto;

// export function ToggleButtonExample() {

//   const [radioValue, setRadioValue] = useState('1');

//   console.log(radioValue)

//   const radios = [
//     { name: 'Active', value: '1' },
//     { name: 'Radio', value: '2' },
//     { name: 'Radio', value: '3' },
//   ];

//   return (
//     <>
// \
//       <ButtonGroup>
//         {radios.map((radio, idx) => (
//           <ToggleButton
//             key={idx}
//             id={`radio-${idx}`}
//             type="radio"
//             variant={idx % 2 ? 'outline-success' : 'outline-danger'}
//             name="radio"
//             value={radio.value}
//             checked={radioValue === radio.value}
//             onChange={(e) => setRadioValue(e.currentTarget.value)}
//           >
//             {radio.name}
//           </ToggleButton>
//         ))}
//       </ButtonGroup>
//     </>
//   );
// }
