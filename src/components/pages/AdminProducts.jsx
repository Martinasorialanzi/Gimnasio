import React, { useEffect, useState } from "react";
import { Table,Col } from "react-bootstrap";
import { GetProducts } from "../../api/GetProducts";

import ModalAgregar from "../ecommerce/modalUpdateEdit/ModalAgregar";
import ModalViewProduct from "../ecommerce/modalUpdateEdit/ModalViewProduct";
import "../ecommerce/detallesProductos.css"
import "../ecommerce/ecommerce.css"
import NavegadorAdmin from "../navegador/NavegadorAdmin";

const AdminProducts = () => {
  


  const [productos, setProductos] = useState([]);
  const [isLoading,setLoading]=useState(true)
  useEffect(() => {
    const getProducts = async () => {
      const response = await GetProducts();
      setProductos(response.products);
      setLoading(false)
    };

    getProducts();
  }, [isLoading]);

  return (
    <>
    <NavegadorAdmin/>
      <div className="container padreAdmin  ">
        <Col>
        <h2 className="mt-4 ">Productos</h2>
        <br />
        <hr/>
        <ModalAgregar className="botonModalAgregar mb-2" />
        <hr/>
        <Table
          striped
          bordered
          hover
          size="xl"
          responsive="xl"
          className="m-4 p-4 tablaProductos"
          
        >
          <thead>
            <tr>
              <th>id</th>
              <th>Nombre</th>
              <th>Categoria</th>
              <th>Precio</th>
              <th>Imagen</th>
              <th>Portada</th>
              <th  className="filaVerProducto">Ver producto</th>
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
                  <td
                   
                  >
                    <ModalViewProduct producto={producto} _id={producto._id} className="botonVerProducto"/>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </Table>
        </Col>
      </div>
    </>
  );
};

export default AdminProducts;
