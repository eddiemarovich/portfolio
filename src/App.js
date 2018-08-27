import React, { Component } from 'react'
import { Row, Col, Grid } from 'react-bootstrap'
import classNames from 'classnames'

import Column from './components/Column'
import About from './components/About'
import Portfolio from './components/Portfolio'
import Contact from './components/Contact'
import eM from './assets/EM.svg'
import fullName from './assets/EDDIEMAROVICH.svg'
import developer from './assets/DEVELOPER.svg'
import myFace from './assets/myface.png'
import myFace2 from './assets/myface2.png'
import belaytionship from './assets/belaytionship.png'
import './App.css'
import data from './json'

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      hoveredSection: null,
      selectedSection: null
    }
  }

  componentDidUpdate() {
    console.log(this.state);
  }

  updateHoveredState = (title) => {
    if (this.state.hoveredSection !== title){
      this.setState({hoveredSection: title})
    } else if (this.state.hoveredSection === title){
      this.setState({hoveredSection: null})
    }
  }

  updateSelectedState = (title) => {
    if (this.state.selectedSection !== title){
      this.setState({selectedSection: title})
    } else if (this.state.selectedSection === title){
      this.setState({selectedSection: null})
    }
  }

  renderBackgroundImage(title) {
    if (this.state.hoveredSection === 'ABOUT' && this.state.hoveredSection === title){
      return myFace
    } else if (this.state.hoveredSection === 'PORTFOLIO' && this.state.hoveredSection === title){
      return belaytionship
    } else if (this.state.hoveredSection === 'CONTACT' && this.state.hoveredSection === title){
      return myFace2
    }
  }

  renderDetails() {
    if (this.state.selectedSection === null){
      return (
        <Row>
          <div className="home__logo">
            <div className="home__logo-main">
              <img src={eM} style={{height:'250px'}} />
              <img src={fullName} className='logo__full-name'/>
            </div>
            <img className="home__logo-side" src={developer}/>
          </div>
          {data.map(e => {
            return (
              <Col
                className={classNames('content-section',{
                  'content-section--hovered': this.state.hoveredSection === `${e.title}`
                },
                {
                  'content-section--selected': this.state.selectedSection === `${e.title}`
                }
              )}
                style={{backgroundImage: `url(${this.renderBackgroundImage(e.title)})`}}
                key={e.id}
                xs={4}
                >
                <Column
                  title={e.title}
                  content={e.content}
                  updateSelectedState={(title) => this.updateSelectedState(title)}
                  updateHoveredState={(title) => this.updateHoveredState(title)}
                  currentHoveredSection={this.state.hoveredSection}/>
              </Col>
            )
          })}
          <div className='home__contact'>

          </div>
        </Row>
      )
    } else if (this.state.selectedSection === 'ABOUT'){
      return (
        <About />
      )
    } else if (this.state.selectedSection === 'PORTFOLIO') {
      return (
        <Portfolio />
      )
    } else if (this.state.selectedSection === 'CONTACT') {
      return (
        <Contact />
      )
    }
  }

  render() {
    return (
      <div className={classNames('home', {
        'home--inactive': this.state.hoveredSection !== null
      })}>
      {this.renderDetails()}
      </div>
    )
  }
}

export default App;
