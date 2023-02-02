import React, { useState, useRef } from "react";
import { Form, Button, Modal, Stack } from "react-bootstrap";
import { AddProducts } from "../../../api/GetProducts";
import { tallesProductos, coloresProductos } from "../../helpers/productos";
import { categorias } from "../../helpers/categorias";

const ModalAgregar = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [nombre, setNombre] = useState("");
  const [categoria, setCategoria] = useState([]);
  const [precio, setPrecio] = useState();
  const [imagen, setImagen] = useState("");
  const [descripcion, setDescripcion] = useState("");
  const [portada, setPortada] = useState(false);
  const [talle, setTalle] = useState([]);
  const [color, setColor] = useState([]);
  const [stock, setStock] = useState();

  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      nombre: nombre,
      categoria: categoria,
      precio: precio,
      imagen:imagen,
      descripcion: descripcion,
      portada: portada,
      talle: talle,
      color: color,
      stock: stock,
    };
    console.log(formData);
  
    AddProducts(formData);
    handleClose()
    setNombre("")
  setCategoria ([]);
  setPrecio();
  setImagen("");
  setDescripcion("");
  setPortada(false);
  setTalle([]);
  setColor([]);
  setStock();
  };

  return (
    <>
    <div className= "">
      <Button  variant="dark" onClick={handleShow}>
        Add Products
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del producto"
                required
                value={nombre}
                onChange={(e) => {
                  setNombre(e.target.value);
                }}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Categoria</Form.Label>
              <br />
              {categorias.map((categoria) => {
                return (
                  <Form.Check
                    inline
                    label={categoria}
                    name="group1"
                    type="checkbox"
                    id={`inline-radio`}
                    // key={}
                    value={categoria}
                    onChange={(e) => {
                      setCategoria(e.target.value);
                    }}
                  />
                );
              })}
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Precio"
                value={precio}
                onChange={(e) => {
                  setPrecio(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Descripcion </Form.Label>
              <Form.Control
                type="text"
                placeholder="Descripcion"
                value={descripcion}
                onChange={(e) => {
                  setDescripcion(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label >Imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Imagen"
               
                value={imagen}
                onChange={(e) => {
                  
                  setImagen(e.target.value);
                }}
                required
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Talle </Form.Label>
              <br />
              {tallesProductos.map((talle) => {
                return (
                  <Form.Check
                    inline
                    label={talle}
                    name="group1"
                    type="checkbox"
                    id={`inline-radio`}
                    value={talle}
                    // key={}
                    onChange={(e) => {
                      setTalle(e.target.value);
                    }}
                  />
                );
              })}
            </Form.Group>

            <Form.Group className="mb-3" controlId="">
              <Form.Label>Color </Form.Label>
              <br />
              {coloresProductos.map((color) => {
                return (
                  <Form.Check
                    inline
                    label={color}
                    name="group1"
                    type="checkbox"
                    id={`inline-radio`}
                    value={[color]}
                    // key={}
                    onChange={(e) => {
                      setColor(e.target.value);
                    }}
                  />
                );
              })}
            </Form.Group>
            <Form.Group className="mb-3" controlId="">
              <Form.Label>Stock </Form.Label>
              <Form.Control
                type="number"
                placeholder="Stock"
                value={stock}
                onChange={(e) => {
                  setStock(e.target.value);
                }}
                required
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>
                Portada
                <br />
              </Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={portada}
                onChange={(e) => {
                  setPortada(e.target.value);
                }}
                required
              >
                <option value="false">False</option>
                <option value="true">True</option>
              </Form.Select>
            </Form.Group>

            <Button variant="dark" size="lg" type="submit" centerded>
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="dark" size="lg" onClick={handleClose}>
            Close
          </Button>
        </Modal.Footer>
      </Modal>
      </div>
    </>
  );
};

export default ModalAgregar;
