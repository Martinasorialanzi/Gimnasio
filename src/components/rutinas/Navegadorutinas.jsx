import React from "react"
import Button from 'react-bootstrap/Button';
import Card from 'react-bootstrap/Card';
import Table from 'react-bootstrap/Table';
import { Link } from "react-router-dom";
import { Nav } from "react-bootstrap";


const Navegadorutinas = () => {
    return (
        <>



<Table striped bordered hover variant="dark">
      <thead>
        <tr>
          <th>Horarios</th>
          <th>Lunes - Martes</th>
          <th>Miercoles - Jueves</th>
          <th>Viernes - Sabado</th>
        </tr>
      </thead>
      <tbody>
        <tr>
          <td>BOXEO</td>
          <td>14:00 a 16:00</td>
          <td>16:00 a 18:00</td>
          <td>18:00 a 20:00</td>
        </tr>
        <tr>
          <td>YOGA</td>
          <td>09:00 a 11:00</td>
          <td>13:00 a 15:00</td>
          <td>16:00 a 18:00</td>
        </tr>
        <tr>
          <td>LIBRE</td>
          <td colSpan={2}>08:00 a 22:00</td>
          <td>10:00 a 21:00</td>
        </tr>
      </tbody>
    </Table>







            <Card className="text-center">
      <Card.Header>Profe Rocky</Card.Header>
      <Card.Body>
        <Card.Title>BOXEO</Card.Title>
        <Card.Text>
          Clases de boxeo semiprofesionales 
        </Card.Text>
        <Link to="/Boxeo">Saber más</Link>
      </Card.Body>
      <Card.Footer className="text-muted">3 meses</Card.Footer>
    </Card>

    <Card className="text-center">
      <Card.Header>Profe Ruth</Card.Header>
      <Card.Body>
        <Card.Title>YOGA</Card.Title>
        <Card.Text>
       sesiones relajadas y enfocadas
        </Card.Text>
        <Link to="/Yoga">Saber más</Link>
      </Card.Body>
      <Card.Footer className="text-muted">5 meses</Card.Footer>
    </Card>

    <Card className="text-center">
      <Card.Header>Entrenamiento con aparatos y pesas</Card.Header>
      <Card.Body>
        <Card.Title>LIBRE</Card.Title>
        <Card.Text>
        Acceso a todos los materiales del establecimiento
        </Card.Text>
        <Link to="/Libre">Saber más</Link>
      </Card.Body>
      <Card.Footer className="text-muted">1 año</Card.Footer>
    </Card>

    



        </>

    )
}

export default Navegadorutinas