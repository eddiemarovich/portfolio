import React, { Component } from 'react'
import {
  Grid,
  Col,
  Row
} from 'react-bootstrap'

import SectionHeader from './SectionHeader'
import './styles.css'
import resume from '../assets/RESUME2.pdf'
import github from '../assets/github.png'
import linkedin from '../assets/linkedin.png'
import resumeIcon from '../assets/list.png'
import mountain from '../assets/mountainIcon.png'
import gmail from '../assets/gmail.png'

class Contact extends Component {

  render() {
    return (
      <div className="section">
        <Grid className="section__container">
          <SectionHeader section='Contact' closeSection={() => this.props.closeSection()}/>
          <Row className="content-section__header first-header">
            <Col >
              <a href="mailto:eddie.marovich@gmail.com" className="section__content-label">Email</a>
            </Col>
            <Col >
              <a href="mailto:eddie.marovich@gmail.com" className="section__content-label"><img src={gmail} alt='github' style={{height: '40px'}}/></a>
            </Col>
          </Row>
          <Row className="content-section__header">
            <Col >
              <a href="https://www.github.com/eddiemarovich" target="_blank" rel="noopener noreferrer" className="section__content-label">GitHub</a>
            </Col>
            <Col >
              <a href="https://www.github.com/eddiemarovich" target="_blank" rel="noopener noreferrer" className="section__content-label"><img src={github} alt='github' style={{height: '40px'}}/></a>
            </Col>
          </Row>
          <Row className="content-section__header">
            <Col >
              <a href="https://www.linkedin.com/in/eddie-marovich" target="_blank" rel="noopener noreferrer" className="section__content-label">LinkedIn</a>
            </Col>
            <Col >
              <a href="https://www.linkedin.com/in/eddie-marovich" target="_blank" rel="noopener noreferrer" className="section__content-label"><img src={linkedin} alt="linkedin" style={{height: '40px'}}/></a>
            </Col>
          </Row>
          <Row className="content-section__header">
            <Col >
              <a href={resume} download target="_blank" rel="noopener noreferrer" className="section__content-label">Resume</a>
            </Col>
            <Col >
              <a href={resume} download target="_blank" rel="noopener noreferrer" className="section__content-label"><img src={resumeIcon} alt="becris" style={{height: '40px'}}/></a>
            </Col>
          </Row>
          <Row className="content-section__header">
            <Col >
              <a href="https://www.mountainproject.com/user/107143844/eddie-m" target="_blank" rel="noopener noreferrer" className="section__content-label">Climbing</a>
            </Col>
            <Col >
              <a href="https://www.mountainproject.com/user/107143844/eddie-m" target="_blank" rel="noopener noreferrer" className="section__content-label"><img src={mountain} alt="mountian icon" style={{height: '40px'}}/></a>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default Contact
