import React, { useEffect, useState } from "react";
import { Table, Form, Button, Modal } from "react-bootstrap";
import { AddProducts } from "../../helpers/GetProducts";
import { tallesProductos, coloresProductos } from "../../helpers/productos";
import { categorias } from "../../helpers/categorias";
import { useForm } from "react-hook-form";

const ModalEditar = () => {
    const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);
  
  const {register, handleSubmit}=useForm()
  
  const onSubmit= async(data)=>{
    AddProducts(data)
  };
  return (
    <>
      <Button variant="primary" onClick={handleShow}>
 Add Products
      </Button>

      <Modal show={show} onHide={handleClose}>
        <Modal.Header closeButton>
          <Modal.Title>Add Products</Modal.Title>
        </Modal.Header>
        <Modal.Body>
        <Form  onSubmit={handleSubmit(onSubmit)}>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Nombre</Form.Label>
  <Form.Control type="text" placeholder="Nombre del producto"  {...register("nombre")} required/>
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
        value={categoria}
        // key={}
        {...register("categoria")} 
      />
    );
  })}
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Precio</Form.Label>
  <Form.Control type="number" placeholder="Precio"  {...register("precio")} required/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Descripcion</Form.Label>
  <Form.Control type="text" placeholder="Descripcion"  {...register("descripcion")} required/>
</Form.Group>
<Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Imagen</Form.Label>
  <Form.Control type="file" placeholder="Imagen"  {...register("imagen")} required/>
</Form.Group>

<Form.Group className="mb-3" controlId="formBasicEmail">
  <Form.Label>Portada</Form.Label>
  <Form.Select aria-label="Default select example"  {...register("portada")} required>
    
    <option value="false">False</option>
    <option value="true">True</option>
   
  </Form.Select>
  <Form.Group className="mb-3" controlId="formBasicPassword">
  <Form.Label>Stock</Form.Label>
  <Form.Control type="number" placeholder="Stock"  {...register("stock")} required/>
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
        {...register("talle")} 
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
        {...register("color")} 
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
  )
}

export default ModalEditar