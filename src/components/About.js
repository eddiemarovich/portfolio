import React, { Component } from 'react'
import { Grid, Col, Row } from 'react-bootstrap'

import SectionHeader from './SectionHeader'
import './styles.css'

class About extends Component {



  render() {
    return (
      <div className="section">
        <Grid className="section__container">
          <SectionHeader section={'About'} closeSection={() => this.props.closeSection()}/>
          <Row>
            <Col md={10} mdOffset={1} xs={12}>
              <p className="section__content">
                My name is Eddie Marovich, and I am a software developer. I like building compelling web and mobile applications using the most appropriate tools for the job. I am currently working as a freelance developer, and have had the opportunity to work with some super cool, crazy smart people to bring clients’ ideas to life.
              </p>
              <br/>
              <p className="section__content">
                I live in Boulder, CO, and when I’m not sitting in front of my computer I try to spend as much time rock climbing as possible. Boulder is a pretty great place for that sort of thing, but what good would the ability to work from wherever be if I wasn’t working from… wherever.  Travel was a key part of the inspiration for wanting to become a developer, and little did I know that writing code would soon become another passion. I couldn’t be more psyched for the opportunity to combine so much of what I love while earning a paycheck.
              </p>
              <br/>
              <p className="section__content">
                If any of this resonates with you, and you’re interested in seeing how we could work together, drop me a line and lets see if we could make a good team!
              </p>
            </Col>
          </Row>
        </Grid>
      </div>
    )
  }
}

export default About
