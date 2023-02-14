import React from 'react'
import NavegadorAdmin from '../navegador/NavegadorAdmin'
import FichasPlanes from './FichasPlanes'
import { Row } from 'react-bootstrap'

const planes = () => {
  return (
      <>
      <NavegadorAdmin/>
      <Row className="justify-content-center ">
      <FichasPlanes/>
      </Row> 

      </>
  )
}

export default planes