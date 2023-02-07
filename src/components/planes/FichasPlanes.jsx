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

  const navegar = useNavigate();
  const baseUrl = "https://gimansio-backend.vercel.app"
  useEffect(() => {
    axios
      .get(`${baseUrl}/v1/obtenerlistadeplanes`)
      .then((res) => {
        console.log(res.data);
        setDataplan(res.data);
        
      })
      .catch((err) => {
        console.log(err);
      });
    
  }, [setDataplan.dataPlan]);

  const borrarPlan = (codigoPlan) => {
    Swal.fire({
      title: `¿Estas seguro de querer eliminar los datos del plan ${codigoPlan} de manera definitiva?`,
      text: "Se perderán para siempre",
      icon: 'warning',
      showCancelButton: true,
      confirmButtonColor: '#3085d6',
      cancelButtonColor: '#d33',
      confirmButtonText: 'Si, borrar!'
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
      <Col className="m-2 " >
        <Card style={{ width: "18rem" }} className="h-100 card-estilo-planes">
          <Card.Header className="text-center card-estilo-planes">00{plan.idPlan}</Card.Header>
          <Card.Body>
            <Card.Title className="text-center ">{plan.nombrePlan}</Card.Title>
            <Card.Text className="text-center ">{plan.description}</Card.Text>
            <Card.Text className="text-center ">
              $ {plan.precio} por hora
            </Card.Text>
            <Card.Text className="text-center ">{plan.codigoPlan}</Card.Text>
            <div className="text-center">
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
          </Card.Body>
        </Card>
      </Col>
    );
  });

  return (
    <>
  
      <h1 className="text-center">Planes</h1>
      <Link to={"/agregarplan"}>
        <div className="text-center mt-4 ">
          {" "}
          <Button className="color-boton-planes">Agregar Plan</Button>
        </div>
      </Link>
      <h4 className="text-center mt-3">Administre hasta 9 planes</h4>
      <Container>
        <Row className="justify-content-md-center mt-5">{listaPlanes}</Row>
      </Container>
    </>
  );
};

export default FichasPlanes;
