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

  useEffect(() => {
    const getProducts = async () => {
      const response = await GetProducts();
      setProductos(response.products);
   
    };

    getProducts();
  }, [productos]);

  return (
    <>
    <NavegadorAdmin/>
      <div className="container padreAdmin  ">
        <Col>
        <h1 className="text-center mt-4 ">Productos</h1>
     
        <hr/>
        <ModalAgregar className="botonModalAgregar mb-2" />
        <hr/>
        <Table
          striped
          bordered
          hover
          size="xs"
          responsive="xl"
          className="m-4 p-4 tablaProductos "
          
        >
          <thead>
            <tr>
            <th className='back-tabla-listado text-light' >id</th>
              <th className='back-tabla-listado text-light'>Nombre</th>
              <th className='back-tabla-listado text-light'>Categoria</th>
              <th className='back-tabla-listado text-light'>Precio</th>
              <th className='back-tabla-listado text-light'>Imagen</th>
              <th className='back-tabla-listado text-light'>Portada</th>
              <th  className="filaVerProducto back-tabla-listado text-light">Ver producto</th>
            </tr>
          </thead>
          <tbody className='justify-content-center'>
            {productos.map((producto) => {
              return (
                <tr key={producto._id}>
                  <td  style={{lineHeight:"200px"}}>{producto._id}</td>
                  <td style={{lineHeight:"200px"}}>{producto.nombre}</td>
                  <td style={{lineHeight:"200px"}}>{producto.categoria[0]}</td>
                  <td style={{lineHeight:"200px"}}>${producto.precio}</td>
                  <td style={{lineHeight:"200px"}}>{producto.portada.toString()}</td>
                  <td style={{lineHeight:"200px"}}>
                    <img
                      alt="fotos productos"
                      src={producto.imagen}
                      width={140}
                      heigth={140}
                    />
                  </td>
                  <td style={{lineHeight:"200px"}}
                   
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
