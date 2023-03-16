import React from 'react'
import { Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import "../../pages/error404/error.css"


const Error = () => {
  return (
    <div className="errorP" id="about">

    <div className="errorHeader">
      <Row>
      <span className='text-center'>ERROR 404</span>
      <Link to={'/'}><h5 className='text-center'>Volver al sitio</h5></Link>
      </Row>
    </div>
   

   </div>
  )
}

export default Error