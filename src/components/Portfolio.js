import React, { Component } from 'react'
import { Grid, Col, Row, Carousel } from 'react-bootstrap'

import SectionHeader from './SectionHeader'
import './styles.css'
import belaytionship from '../assets/belaytionship.png'
import ie from '../assets/ie.png'
import ie2 from '../assets/ie2.png'
import jazzed from '../assets/jazzed.png'
import post1 from '../assets/post1.png'
import post2 from '../assets/post2.png'

class Portfolio extends Component {


  render() {
    return (
      <div className="section">
        <Grid className="section__container portfolio">
          <SectionHeader section='Portfolio' closeSection={() => this.props.closeSection()} />
          <Row className="section__row">
            <Carousel
              interval={500000}
              pauseOnHover={true}
              indicators={false}
              >
              <Carousel.Item className="carousel-item">
                <Row>
                  <a href="https://courses.intelligent.education/" target="_blank"><h1 className="section__title">INTELLIGENT EDUCATION</h1></a>
                  <p style={{textAlign:'center', marginTop: '20px'}}>React, Redux, Mongo, Express, Node</p>
                </Row>
                <Row>
                  <Col sm={10} smOffset={1} xs={10} xsOffset={1}>
                    <p className="section__content">
                      Intelligent Education is an online education platform that allows users to sign up for, and take classes with renowned instructors at the top of their respective fields.  This application hosts a wide range of custom features, including some that allow users to keep track of each lesson’s progress, test their knowledge with quizzes, and take notes that are synced to a specific time in each lesson’s video.
                    </p>
                  </Col>
                </Row>
                <Row className="picture-row">
                  {/* <Col xs={11} md={8} mdOffset={1}> */}
                    <a href="https://courses.intelligent.education/" target="_blank"><img src={ie} alt='intelligent education' style={{height: '180px', borderRadius:'3px', opacity:'1'}}/></a>
                    <a href="https://courses.intelligent.education/" target="_blank"><img src={ie2} alt='intelligent education2' style={{height: '180px', borderRadius:'3px', opacity:'1'}}/></a>
                  {/* </Col> */}
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <a href="https://github.com/eddiemarovich/belaytionship" target="_blank"><h1 className="section__title">BELAYTIONSHIP</h1></a>
                  <p style={{textAlign:'center', marginTop: '20px'}}>ReactNative, Firebase</p>
                </Row>
                <Row>
                  <Col smOffset={1} sm={1}>
                    <a href="https://github.com/eddiemarovich/belaytionship" target="_blank"><img src={belaytionship} alt='belaytionship' style={{height: '220px'}}/></a>
                  </Col>
                  <Col sm={8} smOffset={1}>
                    <p className="section__content">
                      Belaytionship is a React Native application that allows users to sign up using their Facebook account and find climbing partners in their area. This is not a dating app, and to remove the element of romance from the app, users are not able to filter their potential matches by neither age or gender. This project has yet to be deployed to the app store, but is a passion project that I am excited to continue building.
                    </p>
                  </Col>
                </Row>
              </Carousel.Item>
              <Carousel.Item className="carousel-item">
                <Row>
                  <a href="http://theprofilepost.herokuapp.com" target="_blank"><h1 className="section__title">THE PROFILE POST</h1></a>
                  <p style={{textAlign:'center', marginTop: '20px'}}>React, Redux, Express, Node, Postgres</p>
                </Row>
                <Row>
                  <Col sm={10} smOffset={1}>
                    <p className="section__content">
                      The Post is a spinoff of the athlete centric social media network for former and current athletes at both the professional and amateur levels, and is essentially an editorial platform where athletes can share their stories. The Post allows athletes to submit articles and testimonials on a platform geared towards inspiring others to pursue their athletic passions
                    </p>
                  </Col>
                </Row>
                <Row className="picture-row">
                    <a href="http://theprofilepost.herokuapp.com" target="_blank"><img src={post1} alt='the post' style={{height: '180px', borderRadius:'3px', opacity:'1'}}/></a>
                    <a href="http://theprofilepost.herokuapp.com" target="_blank"><img src={post2} alt='the post' style={{height: '180px', borderRadius:'3px', opacity:'1'}}/></a>
                </Row>
              </Carousel.Item>
              <Carousel.Item>
                <Row>
                  <a href="http://jazzed.herokuapp.com/" target="_blank"><h1 className="section__title">JAZZED</h1></a>
                  <p style={{textAlign:'center', marginTop: '20px'}}>jQuery, Express, Postgres, Node</p>
                </Row>
                <Row>
                  <Col smOffset={1} sm={1}>
                    <a href="http://jazzed.herokuapp.com/" target="_blank"><img src={jazzed} alt='jazzed' style={{height: '220px'}}/></a>
                  </Col>
                  <Col sm={8} smOffset={1}>
                    <p className="section__content">
                      Jazzed is a mobile first web application designed to allow musicians to sign up as either a student or instructor, and schedule music lessons appropriately in their area. Jazzed was inspired by the difficult and informal process that is often associated with scheduling music lessons with even the most professional musicians out there.  Jazzed: Music lesson made easy.
                    </p>
                  </Col>
                </Row>
              </Carousel.Item>
            </Carousel>
          </Row>

        </Grid>
      </div>
    )
  }
}

export default Portfolio
