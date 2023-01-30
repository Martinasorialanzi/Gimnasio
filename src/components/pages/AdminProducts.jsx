import React, { useEffect, useState } from "react";
import { Table, Button } from "react-bootstrap";
import { AddProducts, deleteProduct, GetProducts } from "../helpers/GetProducts";
import { useForm } from "react-hook-form";
import ModalAgregar from "../ecommerce/modalUpdateEdit/ModalAgregar";


const AdminProducts = () => {
    
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
      <ModalAgregar/>
      <h1>Add Products</h1>
      

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
              <tr key={producto._id}>
                <td>{producto._id}</td>
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
                <td>{<Button
                 onClick={(e)=>deleteProduct(producto._id)}
                 >Delete</Button>}</td>
              </tr>
            );
          })}
        </tbody>
      </Table>
    </>
  
  )
};

export default AdminProducts;
