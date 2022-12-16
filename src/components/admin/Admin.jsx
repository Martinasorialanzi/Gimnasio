import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore } from '@fortawesome/free-solid-svg-icons'
import { faUsers } from '@fortawesome/free-solid-svg-icons'
import { faCalendarDays } from '@fortawesome/free-solid-svg-icons'
import { faDumbbell } from '@fortawesome/free-solid-svg-icons'
import { faCalendarCheck } from '@fortawesome/free-solid-svg-icons'
import { faCreditCard } from '@fortawesome/free-solid-svg-icons'
import { faListCheck } from '@fortawesome/free-solid-svg-icons'
import { faComments } from '@fortawesome/free-solid-svg-icons'
import '../admin/admin.css'

const admin = () => {
  return (
      <>
          <h1 className='text-center mb-5'>Panel del Administrador</h1>
          <Container>
              <Row>
                  <Col xs={6}  xl={3} >
                      <Card style={{ width: '15rem', height:'15rem' }} className='mb-4 m-2'>
                          <Card.Body>
                              <Card.Subtitle className="text-center"><FontAwesomeIcon icon={faUsers} className='iconosAdmin' /></Card.Subtitle>
                              <Card.Title className='text-center mt-5'>Clientes</Card.Title>
                          </Card.Body>
                      </Card>
                  </Col>
                  <Col xs={6} xl={3}>
                      <Card style={{ width: '15rem', height: '15rem' }} className='mb-4 m-2'>
                          <Card.Body>
                              <Card.Subtitle className="text-center"><FontAwesomeIcon icon={faCalendarDays} className='iconosAdmin' /></Card.Subtitle>
                              <Card.Title className='text-center mt-5'>Gestión de Turnos</Card.Title>
                          </Card.Body>
                      </Card>
                  </Col>
                  <Col xs={6} xl={3}>
                      <Card style={{ width: '15rem', height: '15rem' }} className='mb-4 m-2'>
                          <Card.Body className='Container'>
                              <Card.Subtitle className="text-center"><FontAwesomeIcon icon={faStore} className='iconosAdmin' /></Card.Subtitle>
                              <Card.Title className='text-center mt-5'>Productos</Card.Title>
                          </Card.Body>
                      </Card>
                  </Col>
                  
                  <Col xs={6} xl={3}>
                      <Card style={{ width: '15rem', height: '15rem' }} className='mb-4 m-2'>
                          <Card.Body className='Container'>
                              <Card.Subtitle className="text-center"><FontAwesomeIcon icon={faDumbbell} className='iconosAdmin' /></Card.Subtitle>
                              <Card.Title className='text-center mt-5'>Planes de Entrenamiento</Card.Title>
                          </Card.Body>
                      </Card>
                  </Col>
              </Row>
              <Row>
                  <Col xs={6} xl={3} >
                      <Card style={{ width: '15rem', height: '15rem' }} className='mb-4 m-2'>
                          <Card.Body className='Container'>
                              <Card.Subtitle className="text-center"><FontAwesomeIcon icon={faCalendarCheck} className='iconosAdmin' /></Card.Subtitle>
                              <Card.Title className='text-center mt-5'>Rutinas</Card.Title>
                          </Card.Body>
                      </Card>
                  </Col>
                  <Col xs={6} xl={3}>
                      <Card style={{ width: '15rem', height: '15rem' }} className='mb-4 m-2'>
                          <Card.Body className='Container'>
                              <Card.Subtitle className="text-center"><FontAwesomeIcon icon={faCreditCard} className='iconosAdmin' /></Card.Subtitle>
                              <Card.Title className='text-center mt-5'>Suscripción</Card.Title>
                          </Card.Body>
                      </Card>
                  </Col>
                  <Col xs={6} xl={3}>
                      <Card style={{ width: '15rem', height: '15rem' }} className='mb-4 m-2'>
                          <Card.Body className='Container'>
                              <Card.Subtitle className="text-center"><FontAwesomeIcon icon={faListCheck} className='iconosAdmin' /></Card.Subtitle>
                              <Card.Title className='text-center mt-5'>Cuotas y Membresías</Card.Title>
                          </Card.Body>
                      </Card>
                  </Col>
                  <Col xs={6} xl={3}  >
                      <Card style={{ width: '15rem', height: '15rem' }} className='mb-4 m-2'>
                          <Card.Body className='Container'>
                              <Card.Subtitle className="text-center"><FontAwesomeIcon icon={faComments} className='iconosAdmin' /></Card.Subtitle>
                              <Card.Title className='text-center mt-5'>Chat</Card.Title>
                          </Card.Body>
                      </Card>
                  </Col>

              </Row>
          </Container>
      </>
  )
}

export default admin