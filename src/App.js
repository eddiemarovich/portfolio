import React, { Component } from 'react'
import { Row, Col, Grid } from 'react-bootstrap'
import classNames from 'classnames'

import eM from './assets/EM.svg'
import fullName from './assets/EDDIEMAROVICH.svg'
import developer from './assets/DEVELOPER.svg'
import Column from './components/Column'
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

  render() {
    return (
        <Row>
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
                key={e.id}
                md={4}
                >
                <Column
                  title={e.title}
                  updateSelectedState={(title) => this.updateSelectedState(title)}
                  updateHoveredState={(title) => this.updateHoveredState(title)}/>
              </Col>
            )
          })}
        </Row>
    )
  }
}

export default App;
