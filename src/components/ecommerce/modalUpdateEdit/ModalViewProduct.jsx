import React, { useState } from "react";
import { Button, Modal, Stack } from "react-bootstrap";
import { deleteProduct } from "../../../api/GetProducts";
import ModalEditar from "./ModalEditar";
import "../../ecommerce/detallesProductos.css"
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
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
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
          <Modal.Title>{producto.nombre}</Modal.Title>
        </Modal.Header>
        <Modal.Body>
          <div className="row-product">
            <Stack direction="horizontal" gap={2}>
              <img
                alt="fotos productos carrito"
                src={producto.imagen}
                width={300}
                heigth={300}
              />

              <div className="info-cart-product">
                <Stack direction="vertical" gap={0}>
                  <p className="precio-producto-carrito">{producto.nombre}</p>
                  <p className="cantidad-producto-carrito">
                    Categorias: {producto.categoria[0]}
                  </p>
                  <p className="cantidad-producto-carrito">
                    ${producto.precio}
                  </p>
                  <p className="cantidad-producto-carrito">
                    Stock: {producto.stock}
                  </p>
                  <p className="cantidad-producto-carrito">
                    Colores:{producto.color}
                  </p>

                  <p className="cantidad-producto-carrito">
                    Talles: {producto.talle.toString()}
                  </p>
                  <p className="cantidad-producto-carrito">
                    Descripción: <br />
                    {producto.descripcion}
                  </p>
                  <p className="cantidad-producto-carrito">
                    Portada: {producto.portada.toString()}
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
