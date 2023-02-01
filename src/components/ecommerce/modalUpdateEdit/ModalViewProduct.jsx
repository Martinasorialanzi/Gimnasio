import React, { useState } from "react";
import { Button, Modal, Stack } from "react-bootstrap";
import { deleteProduct } from "../../helpers/GetProducts";
import ModalEditar from "./ModalEditar";

const ModalViewProduct = ({ producto }, _id) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  return (
    <>
      <Button variant="dark" onClick={handleShow}>
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
            onClick={(e) => deleteProduct(producto._id)}
          >
            Delete
          </Button>
        </Modal.Footer>
      </Modal>
    </>
  );
};

export default ModalViewProduct;
