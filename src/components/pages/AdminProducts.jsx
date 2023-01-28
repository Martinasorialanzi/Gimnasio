import React, { useEffect, useState } from "react";
import { Table, Form, Button } from "react-bootstrap";
import { AddProducts, GetProducts } from "../helpers/GetProducts";
import { tallesProductos, coloresProductos } from "../helpers/productos";
import { categorias } from "../helpers/categorias";
import { useForm } from "react-hook-form";


const AdminProducts = () => {
  
  const {register, handleSubmit}=useForm()
  
  const onSubmit= async(data)=>{
    AddProducts(data)
  };
  
  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await GetProducts();
      setProductos(response.products);
    };

    getProducts();
  }, [productos]);
  

  return(
    <>
      <h1>Add Products</h1>
      <Form  onSubmit={handleSubmit(onSubmit)}>
      <Form.Group className="mb-3" controlId="formBasicEmail">
          <Form.Label>id</Form.Label>
          <Form.Control type="text" placeholder="id del producto"  {...register("id")} required/>
        </Form.Group>
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
                value={color}
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

      <Table striped bordered hover size="sm">
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Precio</th>
            <th>Descripción</th>
            <th>Imagen</th>
            <th>Portada</th>
            <th>Talle</th>
            <th>Color</th>
            <th>Stock</th>
            <th>Edit</th>
            <th>Delete</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => {
            return (
              <tr key={producto.id}>
                <td>{producto.id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.categoria[0]}</td>
                <td>{producto.precio}</td>
                <td>{producto.descripción}</td>
                <td>
                  <img
                    src={producto.imagen}
                    alt="imagen producto"
                    height={300}
                  />
                </td>
                <td>{producto.portada}</td> {/* porque no aparece portada */}
                <td>{producto.talle}</td>
                <td>{producto.color}</td>
                <td>{producto.stock}</td>
                <td>{<Button>Edit</Button>}</td>
                <td>{<Button>Delete</Button>}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  
  )
};

export default AdminProducts;
