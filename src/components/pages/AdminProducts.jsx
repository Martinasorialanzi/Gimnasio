import React, { useEffect, useState } from "react";
import { Table, Button, Modal, Stack } from "react-bootstrap";
import { deleteProduct, GetProducts } from "../helpers/GetProducts";

import ModalAgregar from "../ecommerce/modalUpdateEdit/ModalAgregar";
import ModalEditar from "../ecommerce/modalUpdateEdit/ModalEditar";
import ModalViewProduct from "../ecommerce/modalUpdateEdit/ModalViewProduct";

const AdminProducts = () => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const [productos, setProductos] = useState([]);

  useEffect(() => {
    const getProducts = async () => {
      const response = await GetProducts();
      setProductos(response.products);
    };

    getProducts();
  }, [productos]);

  return (
    <>
    
     <div className="container ">
      <h2>Products</h2><br/>
      <ModalAgregar />
      <Table striped bordered hover size="xl" responsive="xl" className="m-4 p-4">
        <thead>
          <tr>
            <th>id</th>
            <th>Nombre</th>
            <th>Categoria</th>
            <th>Precio</th>
            <th>Imagen</th>
            <th>Portada</th>
            <th>Ver producto</th>
          </tr>
        </thead>
        <tbody>
          {productos.map((producto) => {
            return (
              <tr key={producto._id}>
                <td>{producto._id}</td>
                <td>{producto.nombre}</td>
                <td>{producto.categoria[0]}</td>
                <td>${producto.precio}</td>
                 <td>{producto.portada.toString()}</td> 
                <td>
                  <img
                    alt="fotos productos"
                    src={producto.imagen}
                    width={140}
                    heigth={140}
                  />
                </td>
                <td>
                  <ModalViewProduct producto={producto} _id={producto._id} />
                </td>
              </tr>
            );
          })}
        </tbody>
      </Table>
      </div>
    </>
  );
};

export default AdminProducts;
