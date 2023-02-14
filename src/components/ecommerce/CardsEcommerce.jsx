import React from "react";
import { Card, Col, Stack } from "react-bootstrap";
import { Link } from "react-router-dom";

const CardsEcommerce = ({ producto }) => {
  return (
    <Col xs={6} sm={6} md={3} xl={3}>
      <Card
        key={producto._id}
        style={{ width: "90%" }}
        className="mb-4"
        border="light"
      >
        <Link to={`/ecommerce-producto/${producto._id}`}>
          <Card.Img variant="top" src={producto.imagen} />
        </Link>
        <Card.Body>
          <Card.Title className="mb-1">{producto.nombre}</Card.Title>
          <Stack direction="horizontal">
            <Card.Text className="">${producto.precio}</Card.Text>
          </Stack>
        </Card.Body>
      </Card>
    </Col>
  );
};

export default CardsEcommerce;
