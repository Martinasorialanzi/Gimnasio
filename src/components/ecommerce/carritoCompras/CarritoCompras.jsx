import React, { useState,useEffect } from "react";
import {Button, Stack} from "react-bootstrap";
import Offcanvas from "react-bootstrap/Offcanvas";
import { BsFillCartFill } from "react-icons/bs";
import "../carritoCompras/carritoCompras.css";

const CarritoCompras = () => {
  const [show, setShow] = useState(false);
  
  const handleClose = () => setShow(false);
  const handleShow = () => setShow(true);


  const productosCarrito=JSON.parse(localStorage.getItem("productos carrito"))

  console.log(productosCarrito)
  
  // const onDeleteProduct = (product) => {
  //   productosCarrito.filter((item)=>{

  //   })
  //   }

  //   setTotal(total - product.detalles.precio * product.cantidad);
  //   setCantidad(cantidad - product.cantidad);
  //   setAllProducts(results);
  // };

  const onCleanCart = () => {
  
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
           {productosCarrito ? (
            <>
              <div className="row-product">
                {productosCarrito.map((product,index) => (
                  <div className="cart-product" key={index}>
                      <Stack direction="horizontal" gap={2}>
                        <img
                        src={product.detalles.imagen}
                        width={60}
                        heigth={60}/>
                    <div className="info-cart-product">
                    <Stack direction="vertical" gap={0}>
                      <p className="titulo-producto-carrito">
                        {product.detalles.nombre}
                      </p>
                      <p className="precio-producto-carrito">
                        ${product.total}
                      </p>
                      <p className="cantidad-producto-carrito">
                        cantidad: {product.cantidad}
                      </p>
                      
                      <p className="cantidad-producto-carrito">
                        color:{product.color}
                      </p>
                      <p className="cantidad-producto-carrito">
                        talle: {product.talle}
                      </p>
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
                      // onClick={() => onDeleteProduct(product)}
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
                {/* <span className="total-pagar">${total}</span> */}
              </div>

              <button className="btn-clear-all" 
              // onClick={onCleanCart}
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
