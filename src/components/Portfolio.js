import React, { Component } from 'react'
import { Grid, Col, Row, Carousel } from 'react-bootstrap'

import SectionHeader from './SectionHeader'
import './styles.css'
import belaytionship from '../assets/belaytionship.png'

class Portfolio extends Component {

  componentDidMount() {
    console.log(this.props.closeSection)
  }

  render() {
    return (
        <Grid className="section__container">
          <SectionHeader section='Portfolio' closeSection={() => this.props.closeSection()} />
          <Row className="section__row">
            <Carousel interval={5000} pauseOnHover={true}>
              <Carousel.Item>
                <Col sm={1}>
                  <img src={belaytionship} alt='belaytionship' style={{height: '160px'}}/>
                </Col>
                <Col sm={9} smOffset={1}>
                  <p className="section__content">
                    I live in Boulder, CO, and when I’m not sitting in front of my computer I try to spend as much time rock climbing as possible. Boulder is a pretty great place for that sort of thing, but what good would the ability to work from wherever be if I wasn’t working from… wherever.  Travel was a key part of the inspiration for wanting to become a developer, and little did I know that writing code would soon become another passion. I couldn’t be more psyched for the opportunity to combine so much of .
                  </p>
                </Col>
              </Carousel.Item>
              <Carousel.Item>
                <Col sm={1}>
                  <img src={belaytionship} alt='belaytionship' style={{height: '160px'}}/>
                </Col>
                <Col sm={9} smOffset={1}>
                  <p className="section__content">
                    I live in Boulder, CO, and when I’m not sitting in front of my computer I try to spend as much time rock climbing as possible. Boulder is a pretty great place for that sort of thing, but what good would the ability to work from wherever be if I wasn’t working from… wherever.  Travel was a key part of the inspiration for wanting to become a developer, and little did I know that writing code would soon become another passion. I couldn’t be more psyched for the opportunity to combine so much of .
                  </p>
                </Col>
              </Carousel.Item>
            </Carousel>
          </Row>

        </Grid>
    )
  }
}

export default Portfolio
