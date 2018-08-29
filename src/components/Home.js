import React, { Component } from 'react'
import { Row } from 'react-bootstrap'
import classNames from 'classnames'

import About from './About'
import Portfolio from './Portfolio'
import Contact from './Contact'
import Main from './Main'
import '../App.css'


class Home extends Component {

  constructor(props){
    super(props)

    this.state = {
      selectedSection: null,
      hoveredSection: null
    }
  }

  updateHoveredState = (name) => {
    if (this.state.hoveredSection !== name){
      this.setState({hoveredSection: name})
    } else if (this.state.hoveredSection === name){
      this.setState({hoveredSection: null})
    }
  }

  updateSelectedState = (name) => {
    if (this.state.selectedSection !== name){
      this.setState({selectedSection: name, hoveredSection: null})
    } else if (this.state.selectedSection === name){
      this.setState({selectedSection: null})
    }
  }

  contentToRender() {
    const { hoveredSection, selectedSection } = this.state
    if (selectedSection === null){
      return (
        <Row  className={classNames('home', {'home--inactive': hoveredSection !== null})}>

        <Main
          updateSelectedState={(name) => this.updateSelectedState(name)}
          updateHoveredState={(name) => this.updateHoveredState(name)}
          hoveredSection={hoveredSection}
          selectedSection={selectedSection}/>
        </Row>

      )
    } else if (selectedSection === 'about'){
      return (
        <Row  className={classNames('home', {'home--inactive': hoveredSection !== null})}>

        <About section={selectedSection} />
      </Row>

     )
   }
   else if (selectedSection === 'portfolio'){
      return (
        <Row  className={classNames('home', {'home--inactive': hoveredSection !== null})}>

        <Portfolio section={selectedSection} />
      </Row>

     )
   }
   else if (selectedSection === 'contact'){
      return (
        <Row  className={classNames('home', {'home--inactive': hoveredSection !== null})}>

        <Contact section={selectedSection} hey='hey'/>
      </Row>

     )
   }
  }

  render() {
    const { hoveredSection, selectedSection } = this.state
      return (
        <div>
          {this.contentToRender()}
          
        </div>
      )
    }
}


export default Home
