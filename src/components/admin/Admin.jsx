import React from 'react'
import Card from 'react-bootstrap/Card';
import Container from 'react-bootstrap/Container';
import Row from 'react-bootstrap/Row';
import Col from 'react-bootstrap/Col';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faStore, faUsers, faCalendarDays, faDumbbell, faCalendarCheck, faCreditCard, faListCheck, faComments } from '@fortawesome/free-solid-svg-icons'
import '../admin/admin.css'
import { Link } from 'react-router-dom';
import NavegadorAdmin from '../navegador/NavegadorAdmin';



const Admin = () => {

  return (
    <>
    <NavegadorAdmin/>
      <div className='fondo-admin body-mailer'>
         
          <h1 className='text-center mb-5 color-titulo-admin'>Panel del Administrador</h1>
              <Container className='text-center'>
                  <Row className='w-100'>
                      <Col xs={6} xl={3} className='m-auto'>
                          <Card style={{ width: '15rem', height: '15rem' }} className='mb-4 m-2 card-admin card-body-admin'>
                              <Link to="/clientes" className='text-decoration-none text-dark'><Card.Body>
                                  <Card.Subtitle className="text-center mt-5"><FontAwesomeIcon icon={faUsers} className='iconosAdmin' /></Card.Subtitle>
                                  <Card.Title className='text-center mt-5'>Clientes</Card.Title>
                              </Card.Body></Link>
                          </Card>
                      </Col>
                      <Col xs={6} xl={3} className='m-auto'>
                          <Card style={{ width: '15rem', height: '15rem' }} className='mb-4 m-2 card-admin card-body-admin'>
                              <Link to="/turnos " className='text-decoration-none text-dark'> <Card.Body>
                                  <Card.Subtitle className="text-center mt-5"><FontAwesomeIcon icon={faCalendarDays} className='iconosAdmin' /></Card.Subtitle>
                                  <Card.Title className='text-center mt-5'>Gestión de Turnos</Card.Title>
                              </Card.Body></Link>
                          </Card>
                      </Col>
                      <Col xs={6} xl={3} className='m-auto'>
                          <Card style={{ width: '15rem', height: '15rem' }} className='mb-4 m-2 card-admin card-body-admin'>
                              <Link to="/admin/productos" className='text-decoration-none text-dark'>
                                  <Card.Body className='Container'>
                                      <Card.Subtitle className="text-center mt-5"><FontAwesomeIcon icon={faStore} className='iconosAdmin' /></Card.Subtitle>
                                      <Card.Title className='text-center mt-5'>Productos</Card.Title>
                                  </Card.Body></Link>
                          </Card>
                      </Col>


                  </Row>
                  <Row className='w-90'>
                      <Col xs={6} xl={3} className='m-auto'>
                          <Card style={{ width: '15rem', height: '15rem' }} className='mb-4 m-2 card-admin  card-body-admin'>
                              <Card.Body className='Container '>
                                  <Link to={"/planes"} className='text-decoration-none text-dark'><Card.Subtitle className="text-center mt-5"><FontAwesomeIcon icon={faDumbbell} className='iconosAdmin' /></Card.Subtitle>
                                      <Card.Title className='text-center mt-5'>Planes</Card.Title></Link>
                              </Card.Body>
                          </Card>
                      </Col>

              <Col xs={6} xl={3} className='m-auto' >
                          <Card style={{ width: '15rem', height: '15rem' }} className='mb-4 m-2 card-admin card-body-admin'>
                              <Link to="/chat" className='text-decoration-none text-dark'> <Card.Body className='Container'>
                                  <Card.Subtitle className="text-center mt-5"><FontAwesomeIcon icon={faComments} className='iconosAdmin' /></Card.Subtitle>
                                  <Card.Title className='text-center mt-5'>Chat</Card.Title>
                              </Card.Body></Link>
                          </Card>
                      </Col>

                  </Row>
              </Container>
          
      </div>
      </>
  )
}

export default Admin