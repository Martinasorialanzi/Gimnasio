import React, { useState } from "react";
import { Button, Stack } from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsFillCartFill } from "react-icons/bs";
import "../carritoCompras/carritoCompras.css";

const CarritoCompras = ({ allProducts, setAllProducts }) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);

  const onDeleteProduct = (productsCarrito) => {
    let index = allProducts.indexOf(productsCarrito);
    allProducts.splice(index, 1);
    localStorage.setItem("productos carrito", JSON.stringify(allProducts));

    setAllProducts(JSON.parse(localStorage.getItem("productos carrito")));
  };

  const onCleanCart = (e) => {
    localStorage.clear("productos carrito");
    return setAllProducts([]);
  };

  return (
    <>
      <div className="vr" />
      <Button variant="dark" onClick={handleShow}>
        <BsFillCartFill />
      </Button>

      <Offcanvas show={show} onHide={handleClose} placement="end">
        <Offcanvas.Header closeButton>
          <Offcanvas.Title>Offcanvas</Offcanvas.Title>
        </Offcanvas.Header>
        <Offcanvas.Body>
          
            <>
              <div className="row-product">
                {allProducts.map((productsCarrito, index) => (
                  <div className="cart-product" key={index}>
                    <Stack direction="horizontal" gap={2}>
                      <img
                        alt="fotos productos carrito"
                        src={productsCarrito.detalles.imagen}
                        width={60}
                        heigth={60}
                      />
                      <div className="info-cart-product">
                        <Stack direction="vertical" gap={0}>
                          <p className="titulo-producto-carrito">
                            {productsCarrito.detalles.nombre}
                          </p>
                          <p className="precio-producto-carrito">
                            ${productsCarrito.total}
                          </p>
                          <p className="cantidad-producto-carrito">
                            cantidad: {productsCarrito.cantidad}
                          </p>

                          {productsCarrito.color.length !== 0 ? (
                            <p className="cantidad-producto-carrito">
                              color:{productsCarrito.color}
                            </p>
                          ) : null}

                          {productsCarrito.talle.length !== 0 ? (
                            <p className="cantidad-producto-carrito">
                              talle: {productsCarrito.talle}
                            </p>
                          ) : null}
                        </Stack>
                      </div>
                    </Stack>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="icon-close"
                      onClick={(e) => onDeleteProduct(productsCarrito)}
                    >
                      <path
                        strokeLinecap="round"
                        strokeLinejoin="round"
                        d="M6 18L18 6M6 6l12 12"
                      />
                    </svg>
                  </div>
                ))}
              </div>
              {allProducts.length !== 0 ? (
                <>
                  <div className="cart-total">
                    <h3>
                      Total:
                      {allProducts.reduce(
                        (acumulador, actual) => acumulador + actual.total,
                        0
                      )}
                    </h3>
                  </div>

                  <button className="btn-clear-all" onClick={onCleanCart}>
                    Vaciar Carrito
                  </button>
                </>
              ) :  <p className="cart-empty">El carrito está vacío</p>}
            </>
          
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CarritoCompras;
