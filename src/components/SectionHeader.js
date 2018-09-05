import React from 'react'
import { Col, Row } from 'react-bootstrap'
import { Link } from 'react-router-dom'
import close from '../assets/close.svg'

import './styles.css'

const SectionHeader = (props) => {
  return (
    <Row className="section__header">
      <Col sm={2} smOffset={5} >
        <h1 className='section__title'>
          {props.section}
        </h1>
      </Col>
      <Col sm={1} smOffset={4} className="section__close">
        <Link to="/"><img className="section__close-button" src={close} alt="close" style={{height: '40px'}}/></Link>
      </Col>
    </Row>
  )
}

export default SectionHeader
