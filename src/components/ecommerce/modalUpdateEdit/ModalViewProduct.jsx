import React, { useState } from "react";
import { Button, Modal, Stack } from "react-bootstrap";
import { deleteProduct } from "../../../api/GetProducts";
import ModalEditar from "./ModalEditar";
import "../../ecommerce/ModalViewProducts.css"
import Swal from 'sweetalert2'

const ModalViewProduct = ({ producto }, _id) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const borrarProduct = (_id) => {
    Swal.fire({
      title: 'Estas seguro?',
      text: "No se podra revertir!",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#E95821',
      cancelButtonColor: '#5B5B5B',
      confirmButtonText: 'Si, borrar!'
      
    }).then((result) => {
      if (result.isConfirmed) {
        deleteProduct(_id)
        Swal.fire(
          'Borrado!',
          'Su producto fue borrado.',
          'success'
        )

      }
    })
  }

  return (
    <>
      <Button variant="dark" onClick={handleShow} className="botonModalAgregar">
        Ver Producto
      </Button>

      <Modal show={show} onHide={handleClose} centered size="xl">
        <Modal.Header closeButton>
          <Modal.Title className="titulo-view-product">{producto.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="">
            <Stack direction="horizontal" gap={4}>
              <img
                alt="fotos productos carrito"
                src={producto.imagen}
                width={300}
                heigth={300}
              />

              <div className="">
                <Stack direction="vertical" gap={0}>
                  <p className="titulo-view-product"><b>{producto.nombre}</b></p>
                  <p className="categorias-view-product">
                   <b>Categorias: </b> {producto.categoria[0]}
                  </p>
                  <p className="categorias-view-product">
                    ${producto.precio}
                  </p>
                  <p className="categorias-view-product">
                   <b>Stock: </b> {producto.stock}
                  </p>
     
                  <p className="categorias-view-product">
                  <b> Colores:</b>  {producto.color}
                  </p>
             
                    {producto.talle.length>1?(<>
                  <p className="categorias-view-product">
                    <b>Talles:</b>  {producto.talle.toString()}</p></>):null
                  
                  }
                  <p className="categorias-view-product">
                   <b>Descripción:</b>  <br />
                    {producto.descripcion}
                  </p>
                  <p className="categorias-view-product">
                   <b>Portada:</b>  {producto.portada.toString()}
                  </p>
                </Stack>
              </div>
            </Stack>
          </div>
        </Modal.Body>
        <Modal.Footer>
          <ModalEditar _id={producto._id} />
          <Button
            variant="dark"
            size="lg"
            onClick={(e) => borrarProduct(producto._id)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalViewProduct;
