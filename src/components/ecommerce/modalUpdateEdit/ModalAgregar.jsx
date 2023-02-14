import React, { useState } from "react";
import { Form, Button, Modal } from "react-bootstrap";
import { AddProducts } from "../../../api/GetProducts";
import { tallesProductos, coloresProductos } from "../../helpers/Productos";
import { categorias } from "../../helpers/categorias";
import "../../ecommerce/ecommerce.css";
import Swal from "sweetalert2";

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

    Swal.fire({
      title: "Esta seguro que quiere agregar un producto",
      showDenyButton: true,
      confirmButtonText: "Guardar",
      denyButtonText: `No guardar`,
      confirmButtonColor: "#E95821",
      denyButtonColor: "#5B5B5B",
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        Swal.fire({icon: 'success',
        title: 'Guardado!',
        showConfirmButton: false,
        timer: 1500});
        const formData = {
          nombre: nombre,
          categoria: categoria,
          precio: precio,
          imagen: imagen,
          descripcion: descripcion,
          portada: portada,
          talle: talle,
          color: color,
          stock: stock,
        };
        console.log(formData);

        AddProducts(formData);
        handleClose();
        setNombre("");
        setCategoria([]);
        setPrecio();
        setImagen("");
        setDescripcion("");
        setPortada(false);
        setTalle([]);
        setColor([]);
        setStock();
      } else if (result.isDenied) {
        Swal.fire({icon: 'info',
        title: 'El pruducto no fue agregado',
        showConfirmButton: false,
        timer: 1500});
      }
    });
  };

  return (
    <>
      <div className="container-agregar-producto">
        <Button className="boton-agregar-producto" variant="dark" onClick={handleShow}>
          Add Products
        </Button>
      </div>

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
                maxLength={30}
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
              {categorias.map((categoria, idx) => {
                return (
                  <Form.Check
                    inline
                    label={categoria === "all" ? "Ver todo" : categoria}
                    name="group1"
                    type="checkbox"
                    id={`inline-radio`}
                    key={idx}
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
                min={1}
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
              <Form.Label>Url imagen</Form.Label>
              <Form.Control
                type="text"
                placeholder="Url imagen"
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
              {tallesProductos.map((talle, idx) => {
                return (
                  <Form.Check
                    inline
                    label={talle}
                    name="group1"
                    type="checkbox"
                    id={`inline-radio`}
                    value={talle}
                    key={idx}
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
              {coloresProductos.map((color, idx) => {
                return (
                  <Form.Check
                    inline
                    label={color}
                    name="group1"
                    type="checkbox"
                    id={`inline-radio`}
                    value={[color]}
                    key={idx}
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
                min={0}
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

            <Button variant="dark" size="lg" type="submit">
              Guardar
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer></Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalAgregar;
