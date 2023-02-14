import React from "react";
import Card from "react-bootstrap/Card";
import { Container } from "react-bootstrap";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Button from "react-bootstrap/Button";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link, useNavigate } from "react-router-dom";
import Swal from "sweetalert2";


const FichasPlanes = () => {
  const [dataPlan, setDataplan] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  const navegar = useNavigate();
  const baseUrl = "https://gimansio-backend.vercel.app"
  useEffect(() => {
    axios
      .get(`${baseUrl}/v1/obtenerlistadeplanes`)
      .then((res) => {
        
        setDataplan(res.data);
        
        setIsLoading(false)
        
      })
      .catch((err) => {
        console.log(err);
      });
    
  }, [isLoading]);

  const borrarPlan = (codigoPlan) => {
    Swal.fire({
      title: `¿Estas seguro de querer eliminar los datos del plan ${codigoPlan} de manera definitiva?`,
      text: "Se perderán para siempre",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonText: 'Si, borrar!',
      confirmButtonColor: '#E95821',
      cancelButtonColor: '#5B5B5B',
    }).then((result) => {
      if (result.isConfirmed) {
        axios.post(`${baseUrl}/v1/borrarPlan`, { codigoPlan: codigoPlan }).then((res) => {
          console.log(res.data);
          // alert(res.data)
          Swal.fire("Listo", "Plan eliminado Correctamente", "info", "Ok");
          navegar(0);
        })
          .catch((err) => {
            console.log(err);
          });
      }
    }
    )
  };

  //MAPEAMOS LISTA DE USUARIOS
  const listaPlanes = dataPlan.map((plan) => {
    return (
      <Col className="m-3 container" xs={12} sm={6} md={4} xl={3}>
        <Card  className="h-100 card-estilo-planes">
          <Card.Header className="text-center card-estilo-planes">00{plan.idPlan}</Card.Header>
          <Card.Body>
            <Card.Title className="text-center ">{plan.nombrePlan}</Card.Title>
            <Card.Text className="text-center ">{plan.description}</Card.Text>
            <Card.Text className="text-center ">
              $ {plan.precio} por hora
            </Card.Text>
            <Card.Text className="text-center ">{plan.codigoPlan}</Card.Text>
          </Card.Body>
            <div className="text-center mb-2">
              <Button
                className="m-1 w-50 text-center color-boton-planes"
                variant="success"
                onClick={() => {
                  borrarPlan(plan.codigoPlan);
                }}
              >
                Borrar
              </Button>
              <Link to={`/editarplan/${plan.codigoPlan}`}>
                <Button className="m-1 w-50 color-boton-planes" variant="success">
                  Editar
                </Button>
              </Link>
            </div>
        </Card>
      </Col>
    );
  });

  return (
    <>
  
<div className="container">
      <h1 className="text-center mt-4 ">Planes</h1>
          <hr className="m-5 mb-0"/>
        <div className="text-center m-4 container-agregar-plan ">
      <Link to={"/agregarplan"}>
          <Button className=" button-agregar-planes m-4 mb-0 mt-0" variant="dark">Agregar Plan</Button>
      </Link>
        </div>
        <hr className="m-5 mt-0"/>
      <h5 className="text-center mt-2">Administre hasta 9 planes</h5>
      <Container>
        <Row className="justify-content-center m-4">{listaPlanes}</Row>
      </Container>
      </div>
    </>
  );
};

export default FichasPlanes;
