import React, { useEffect, useState } from "react";
import { Table, Form, Button, Modal } from "react-bootstrap";
import { GetProduct, UpdateProduct } from "../../helpers/GetProducts";
import { tallesProductos, coloresProductos } from "../../helpers/productos";
import { categorias } from "../../helpers/categorias";
import { useForm } from "react-hook-form";
import axios from "axios";
const ModalEditar = (_id) => {
  const [show, setShow] = useState(false);


  const [nombre, setNombre] = useState("")
  const [categoria, setCategoria] = useState([])
  const [precio, setPrecio] = useState()
  const [urlImagen, setUrlImagen] = useState("")
  const [descripcion, setDescripcion] = useState("")
  const [portada, setPortada] = useState(false)
  const [talle, setTalle] = useState([])
  const [color, setColor] = useState([])
  const [stock, setStock] = useState()

  const handleClose = () => setShow(false);


  const [producto, setProducto] = useState({});
  
  const handleShow = (_id) => {

    try {
      const getProduct=async()=>{
      const response= await GetProduct(_id._id);
      console.log(response)
      setNombre(response.nombre)
      setCategoria(response.categoria)
      setPrecio(response.precio)
    //   setUrlImagen(response.urlImagen)
      setDescripcion(response.descripcion)
      setPortada(response.portada)
      setTalle(response.talle)
      setColor(response.color)
      setStock(response.stock)
    }
      getProduct()
      
    } catch (error) {
      console.log(error);
    }
    setShow(true);
  };



  const handleSubmit = (e) => {
    e.preventDefault();
    const formData = {
      nombre: nombre,
      categoria: categoria,
      precio: precio,
      urlImagen: urlImagen,
      descripcion: descripcion,
      portada: portada,
      talle: talle,
      color: color,
      stock: stock,
    };
    console.log(formData);
    UpdateProduct(_id._id,formData);
  };

  return (
    <>
      <Button variant="primary" onClick={(e) => handleShow(_id)}>
        Add Products
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <Form onSubmit={handleSubmit}>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Nombre</Form.Label>
              <Form.Control
                type="text"
                placeholder="Nombre del producto"
                required
                
                value={nombre}
                onChange={(e) => {
                  setNombre(e.target.value);
                }}
                defaultValue={producto.nombre}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Categoria</Form.Label>
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

            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Precio</Form.Label>
              <Form.Control
                type="number"
                placeholder="Precio"
                value={precio}
                onChange={(e) => {
                  setPrecio(e.target.value);
                }}
                required
                defaultValue={producto.precio}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Descripcion</Form.Label>
              <Form.Control
                type="text"
                placeholder="Descripcion"
                value={descripcion}
                onChange={(e) => {
                  setDescripcion(e.target.value);
                }}
                required
                defaultValue={producto.descripcion}
              />
            </Form.Group>
            <Form.Group className="mb-3" controlId="formBasicPassword">
              <Form.Label>Imagen</Form.Label>
              <Form.Control
                type="file"
                placeholder="Imagen"
                value={urlImagen}
                onChange={(e) => {
                  setUrlImagen(e.target.value);
                }}
                required
                defaultValue={producto.imagen}
              />
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Portada</Form.Label>
              <Form.Select
                aria-label="Default select example"
                value={portada}
                onChange={(e) => {
                  setPortada(e.target.value);
                }}
                required
                defaultValue={producto.portada}
              >
                <option value="false">False</option>
                <option value="true">True</option>
              </Form.Select>
              <Form.Group className="mb-3" controlId="formBasicPassword">
                <Form.Label>Stock</Form.Label>
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
            </Form.Group>

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Talle</Form.Label>
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

            <Form.Group className="mb-3" controlId="formBasicEmail">
              <Form.Label>Color</Form.Label>
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
            <Form.Group className="mb-3" controlId="formBasicCheckbox">
              <Form.Check type="checkbox" label="Check me out" />
            </Form.Group>
            <Button variant="primary" type="submit">
              Submit
            </Button>
          </Form>
        </Modal.Body>
        <Modal.Footer>
          <Button variant="secondary" onClick={handleClose}>
            Close
          </Button>
          <Button variant="primary" onClick={handleClose}>
            Save Changes
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalEditar;