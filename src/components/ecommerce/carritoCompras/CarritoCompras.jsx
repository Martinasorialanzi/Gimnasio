import React, { useState } from "react";
import Button from "react-bootstrap/Button";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsFillCartFill } from "react-icons/bs";
import "../carritoCompras/carritoCompras.css"

const CarritoCompras = ({ allProducts,setAllProducts, setCantidad,cantidad,total,setTotal}) => {
  const [show, setShow] = useState(false);

  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);



  const onDeleteProduct = (product) => {
		const results = allProducts.filter(
			item => item.detalle.id !== product.detalle.id
		);

		setTotal(total - product.detalle.precio * product.cantidad);
		setCantidad(cantidad - product.cantidad);
		setAllProducts(results);
	};

	const onCleanCart = () => {
		setAllProducts([]);
		setTotal(0);
		setCantidad(0);
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


          {allProducts ? (
            <>
              <div className="row-product">
                {allProducts.map((product) => (
                  <div className="cart-product" key={product.detalles.id}>
                    <div className="info-cart-product">
                      <span className="cantidad-producto-carrito">
                        {product.cantidad}
                      </span>
                      <p className="titulo-producto-carrito">
                        {product.detalles.nombre}
                      </p>
                      <span className="precio-producto-carrito">
                        ${product.detalles.precio}
                      </span>
                    </div>
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="none"
                      viewBox="0 0 24 24"
                      strokeWidth="1.5"
                      stroke="currentColor"
                      className="icon-close"
                      onClick={() => onDeleteProduct(product)}
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

              <div className="cart-total">
                <h3>Total:</h3>
               <span className="total-pagar">${total}</span>
              </div>

              <button className="btn-clear-all" 
              onClick={onCleanCart}
              >
                Vaciar Carrito
              </button>
            </>
          ) : (
            <p className="cart-empty">El carrito está vacío</p>
          )} 
        </Offcanvas.Body>
      </Offcanvas>
    </>
  );
};

export default CarritoCompras;
